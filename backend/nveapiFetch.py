from urllib.request import Request, urlopen
import json
async def nveapiFetch(reqdata):
    #1000 = vannstand, 1001 = discharge, water tempratur = 1003, air tempratur = 17
    print('------------------')
    
    #return reqdata
    print(reqdata)
    StationId = reqdata['StationId']
    parameter = reqdata['parameter']
    resolution_time = reqdata['resolution_time'] 
    reference_time = reqdata['reference_time']
    request_headers = {
        "Accept": "application/json",
        "X-API-Key": "RYgyp6MSs0+zuCqnuMaj4A=="
    }

    url = "https://hydapi.nve.no/api/v1/Observations?StationId=%s&Parameter=%s&ResolutionTime=%s&ReferenceTime=%s" %(StationId, parameter,resolution_time,reference_time,)
    #url = "https://hydapi.nve.no/api/v1/Observations?StationId=212.27.0&Parameter=1001&ResolutionTime=0&ReferenceTime=P7D/"
    request = Request(url, headers=request_headers)
    response = urlopen(request)
    content = response.read().decode('utf-8')

    parsed_result = json.loads(content)


    return parsed_result
    
