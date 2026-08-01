from flask import Flask
from flask import request
from flask import jsonify

from flask_cors import CORS

from rag import ask_portfolio

#####################################################

app = Flask(__name__)

CORS(app)

#####################################################

@app.route("/chat",methods=["POST"])

def chat():

    data = request.get_json()

    question = data["question"]

    answer = ask_portfolio(question)

    return jsonify(

        {

            "answer":answer

        }

    )

#####################################################

if __name__=="__main__":

    app.run(debug=True)