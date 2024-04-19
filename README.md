PhishNet is a ML based phishing website detection tool , which will extract over 30 features from a given URL and will further use these to detect phishing website 

PhishNet is Web App based and also for ease of user chrome extension is provided 

Phishing_URL_Detection.ipynb file contains the code for training different ML models and selecting the best one among them based on several evaluation metrics 

The model exported in pickle file is deployed on flask 

Steps to run the project --> 

1) Clone the project using link in code section
2) Then install dependencies using command --> pip install -r requirements.txt
3) After Step2 run the project using , python app.py
4) After Step3 , you can use the chrome extension from the extensions section in the browser you are using , the extension needs to be installed or you can directly input the URL in the Web App
5) Probablity of website being phishing one will be displayed after completing step4 
