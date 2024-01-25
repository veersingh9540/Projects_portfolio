import cv2

#video of a car 
video = cv2.VideoCapture("videoplayback.mp4")

#haar features XML file     
classifier_file = 'cars.xml'
pedestrian_file = 'haarcascade_fullbody.xml'

#create car classifier
car_tracker = cv2.CascadeClassifier(classifier_file)
pedestrian_tracker = cv2.CascadeClassifier(pedestrian_file)
# video running algorithm 
while True:

    #read the curent Frame 
    (read_succesful , frame)= video.read()
    
    #safe coding 
    if read_succesful:
        
        grayscaled_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    else:
        break


    #detect cars
    cars = car_tracker.detectMultiScale(grayscaled_frame)   
    pedestrians = pedestrian_tracker.detectMultiScale(grayscaled_frame) 
    
    #Draw Rectangles around a car 
    for (x,y,w,h) in cars:
        cv2.rectangle(frame, (x+1,y+1),(x+w,y+h),(255,0,0),2) 
        cv2.rectangle(frame, (x,y),(x+w,y+h),(0,0,255),2) 
    #Draw Rectangle aroung a pedestrian 
    for (x,y,w,h) in pedestrians:
        cv2.rectangle(frame, (x,y),(x+w,y+h),(0,255,255),2)

    #display the image with faces spotted 
    
    cv2.imshow('NEURTH Car and Pedestrian detector',frame)

    #wait to exit and show the image to us 
    key = cv2.waitKey(1)

    if key==81 or key==113:
        break

video.release()
