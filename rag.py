from sentence_transformers import SentenceTransformer
from qdrant_client import QdrantClient
from openai import OpenAI
from dotenv import load_dotenv
import os

############################################################

load_dotenv()
QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

COLLECTION_NAME = "portfolio"

print("GROQ:", os.getenv("GROQ_API_KEY"))
print("QDRANT:", os.getenv("QDRANT_API_KEY"))

############################################################

embed_model = SentenceTransformer("all-MiniLM-L6-v2")

############################################################

qdrant = QdrantClient(
    url=QDRANT_URL,
    api_key=QDRANT_API_KEY
)

############################################################

groq = OpenAI(
    api_key=GROQ_API_KEY,
    base_url="https://api.groq.com/openai/v1"
)

############################################################

def build_context(results):

    context = ""

    for point in results.points:

        p = point.payload

        context += f"""

Source : {p['source']}

{p['text']}

----------------------------------------

"""

    return context

############################################################

def ask_portfolio(question):

    query_vector = embed_model.encode(question).tolist()

    results = qdrant.query_points(

        collection_name=COLLECTION_NAME,

        query=query_vector,

        limit=8

    )

    context = build_context(results)

    prompt = f"""
You are Sham's Portfolio Assistant.

Your job is to answer questions about Sham.

Use the retrieved information to answer naturally.

You may summarize, infer strengths and combine information from multiple chunks.

Do NOT invent facts.

If the answer is unavailable, reply:

"I couldn't find that information in my portfolio."

Context:

{context}

Question:

{question}

"""

    response = groq.chat.completions.create(

        model="llama-3.1-8b-instant",

        messages=[

            {

                "role":"system",

                "content":"You are Sham's Portfolio Assistant."

            },

            {

                "role":"user",

                "content":prompt

            }

        ]

    )

    return response.choices[0].message.content