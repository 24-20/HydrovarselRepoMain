from flask import Flask, request
from flask_cors import CORS
from get_all_stations import get_all_stations
from nveapiFetch import nveapiFetch
app = Flask(__name__)
CORS(app)

@app.route("/station-data", methods=["GET"])
async def get_contacts():
    print('hello there')
    all_stations = await get_all_stations()
    return {"data": all_stations}


@app.route("/mesurments", methods=['POST'])
#{stationName: 'Eibyelva v/Hammeren', stationId: '212.27.0', river: 'Eibyelva', kommune: 'Alta', kommuneNumber: '5403', …}
#{parameter: '1001', resolution_time: 0, reference_time: 'P7D/'}
async def getM():
    reqdata = request.json
    print(reqdata)
    print('step 1')
    apidata = await nveapiFetch(reqdata)
    print('step 2')
    print('finished')
    #return apidata
    return {'data':apidata}

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, port=5000)