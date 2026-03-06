from flask import Flask, jsonify
from flask_cors import CORS
from nba_api.stats.static import players

app = Flask(__name__)
CORS(app)

@app.route("/players")
def get_players():
    nba_players = players.get_players()

    formatted = []

    for p in nba_players:
        formatted.append({
            "id": p["id"],
            "name": p["full_name"]
        })

    return jsonify(formatted)

if __name__ == "__main__":
    app.run(port=5000)