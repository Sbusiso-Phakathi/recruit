# import face_recognition
# known_image = face_recognition.load_image_file("/Users/sbusisophakathi/Desktop/face/2.jpg")
# unknown_image = face_recognition.load_image_file("/Users/sbusisophakathi/Desktop/face/1.jpg")

# biden_encoding = face_recognition.face_encodings(known_image)[0]
# unknown_encoding = face_recognition.face_encodings(unknown_image)[0]

# results = face_recognition.compare_faces([biden_encoding], unknown_encoding)
# print(results)
import cv2
import face_recognition
import time
import gspread
from google.oauth2.service_account import Credentials
import datetime
time.sleep(5)  # Wait 5 seconds before starting

credentials = Credentials.from_service_account_file("/Users/sbusisophakathi/Downloads/automatic-time-379113-0aa736c6915a.json")
scoped_credentials = credentials.with_scopes(["https://www.googleapis.com/auth/spreadsheets", "https://www.googleapis.com/auth/drive"])
gc = gspread.authorize(scoped_credentials)
sheet = gc.open_by_url('https://docs.google.com/spreadsheets/d/1BiQgyPMJMEPgLCT8mJ-oDENyxgny-7wkPrAw_NMfwPA/edit?gid=1126997064#gid=1126997064').sheet1


# Load the known image and encode it
known_image = face_recognition.load_image_file("sbu.jpg")
known_encoding = face_recognition.face_encodings(known_image)[0]


# Access the webcam
video_capture = cv2.VideoCapture(0)

# Check if the webcam is opened correctly
if not video_capture.isOpened():
    print("Error: Could not open webcam.")
else:
    print("Press 'q' to exit the loop.")
    
    while True:
        # Capture a frame from the webcam
        ret, frame = video_capture.read()
        if ret:
            # Convert the captured frame from BGR to RGB format
            rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            
            # Find face encodings in the captured frame
            unknown_encodings = face_recognition.face_encodings(rgb_frame)
            
            if unknown_encodings:
                # Use the first face encoding found
                unknown_encoding = unknown_encodings[0]
                
                # Compare the captured face with the known face
                results = face_recognition.compare_faces([known_encoding], unknown_encoding)
                current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

                
                # Check if there's a match
                if results[0]:
                    print("Match found!")
                    sheet.append_row([current_time, "Match Found"])

                    break
                else:
                    sheet.append_row([current_time, "No Match Found"])

                    print("No match found. Scanning again...")
            else:
                print("No faces found in the captured frame.")
        
        # Display the frame with OpenCV (optional)
        cv2.imshow('Video', frame)
        
        # Break the loop if the 'q' key is pressed
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    
    # Release the webcam and close any OpenCV windows
    video_capture.release()
    cv2.destroyAllWindows()
