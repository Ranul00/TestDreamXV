from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
import DataProcess
import pandas as pd
import json

ws = pd.read_excel("Players.xlsx", "Player Details", index_col=None, na_values=["NA"])

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

db = SQLAlchemy(app)

@app.route('/bestTeam', methods =["GET"])
def getBestTeam():
    team = DataProcess.bestTeam()
    return json.dumps(team)


@app.route('/predictedBestTeam', methods =["GET"])
def getPredictedBestTeam():
    team = DataProcess.bestTeam()
    return json.dumps(team)

@app.route('/positionPlayers', methods =["GET"])
def getPositionPlayers():
    position = request.args.get('position')
    players = DataProcess.positionSort(position)
    return json.dumps(players)

@app.route('/search', methods =["GET"])
def getSearchedPlayers():
    name = request.args.get('name')
    players = DataProcess.searchPlayer(name)
    return json.dumps(players)
    
if __name__ == "__main__":
    app.run(host='192.168.8.106',debug=True)