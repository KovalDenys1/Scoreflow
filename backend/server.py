from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import requests
from nba_api.stats.static import players

load_dotenv()

app = Flask(__name__)
CORS(app)

API_KEY = os.getenv("VITE_BALLDONTLIE_API_KEY")
print("API KEY:", API_KEY)

import requests

API_KEY = "VITE_BALLDONTLIE_API_KEY"




@app.route("/teams")
def get_teams():

    url = "https://api.balldontlie.io/v1/teams"

    headers = {
        "Authorization": f"Bearer {API_KEY}"
    }

    response = requests.get(url, headers=headers)

    print("Status:", response.status_code)
    print("Response:", response.text)

    if response.status_code != 200:
        return jsonify({
            "error": "API request failed",
            "status": response.status_code,
            "response": response.text
        }), 500

    data = response.json()

    return jsonify(data["data"])


@app.route("/players")
def get_players():
    nba_players = players.get_players()

    formatted = []

    for p in nba_players:
        formatted.append({
            "id": p["id"],
            "name": p["full_name"],

        })

    return jsonify(formatted)


if __name__ == "__main__":
    app.run(port=5000)