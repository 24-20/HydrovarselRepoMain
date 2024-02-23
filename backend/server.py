from flask import Flask, request
from flask_cors import CORS
from get_all_stations import get_all_stations
app = Flask(__name__)
CORS(app)

@app.route("/station-data", methods=["GET"])
async def get_contacts():
    print('hello there')
    all_stations = await get_all_stations()
    return {"data": all_stations}

if __name__ == "__main__":
    app.run(debug=True)