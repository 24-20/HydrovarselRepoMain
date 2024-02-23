from urllib.request import Request, urlopen
import io, json
async def get_all_stations ():

    request_headers = {
        "Accept": "application/json",
        "X-API-Key": "U/PVoWW+80qJGfE6FEemhg=="
    }

    request = Request("https://hydapi.nve.no/api/v1/Stations?Active=OnlyActive", headers=request_headers)
    response = urlopen(request)

    content = response.read().decode('utf-8')

    parsed_result = json.loads(content)

    relevantstationdata = []
    #len(parsed_result["data"])
    for i in range(len(parsed_result["data"])):
        obj = parsed_result["data"][i]
        relevantobj = {
            "stationName" : obj["stationName"],
            "stationId" : obj["stationId"],
            "river" : obj["riverName"],
            "kommune" : obj["councilName"],
            "kommuneNumber" : obj["councilNumber"],
            "fylke" : obj["countyName"],
            "seriesList" : obj['seriesList']
        }
        relevantstationdata.append(relevantobj)
        


    return relevantstationdata
