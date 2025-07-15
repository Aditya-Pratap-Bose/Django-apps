from django.http import JsonResponse
import json

def api_home(request, *args, **kwargs):
    # request -> HttpRequest -> Django
    # print(dir(request))
    # request.body
    body = request.body  # byte string of JSON data
    data = {}
    try:
        data = json.loads(body) #string of json data -> python dict
    except:
        pass
    print(data)
    data['headers'] = request.headers #request.META
    data['content_type'] = request.content_type
    return JsonResponse({"message": "Hi there, this is your django api response"})
