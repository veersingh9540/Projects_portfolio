import json
from ibm_watson import VisualRecognitionV4
from ibm_watson.visual_recognition_v4 import FileWithMetadata, AnalyzeEnums
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator

apikey = 'YOUR API KEY HERE'
url = 'YOUR URL HERE'
collection = 'YOUR COLLECTION HERE'

authenticator = IAMAuthenticator(apikey)
service = VisualRecognitionV4('2018-03-19', authenticator=authenticator)
service.set_service_url(url) 

path = 'Path of your image'

with open(path, 'rb') as mask_img:
    analyze_images = service.analyze(collection_ids=[collection], 
                                     features=[AnalyzeEnums.Features.OBJECTS.value], 
                                    images_file=[FileWithMetadata(mask_img)]).get_result()



obj = analyze_images['images'][0]['objects']['collections'][0]['objects'][0]['object']
coords = analyze_images['images'][0]['objects']['collections'][0]['objects'][0]['location']

from matplotlib import pyplot as plt

cv2.imread(path)