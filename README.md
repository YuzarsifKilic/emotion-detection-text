# Emotion Detection

### The purpose of the application is to detect emotions from the entered Turkish texts.

### Emotions:
* Excitement
* Joy
* Jealous
* Happy
* Sadness
* Anger
* Fear
* Surprise
* Disappointment


## Requirements
### Setting Up and Running the Python Application
1. Follow these steps to install the required Python packages and run the application:
````
cd api
pip install Flask==3.0.3
pip install Flask-Cors==4.0.1
pip install pandas==1.5.1
pip install scikit-learn==1.1.3
pip install tensorflow==2.16.1
python api.py
````

### Setting Up and Running the Angular Application
1. Follow these steps to install the required Angular packages and run the application:
````
cd frontend
npm install -g @angular/cli
npm install
ng serve
````

### Additional Information
* The api.py file will run as a Flask-based API server.
* The Angular application is located in the frontend directory and can be run locally with the ng serve command.
* You can access the Angular application in your browser at http://localhost:4200.

### Notes
* When you run the ng serve command, the Angular application will be running on a local server.
* The Python API server typically runs at http://localhost:5000.

### Troubleshooting
* If you encounter errors while installing packages, ensure that your Python and Node.js versions are up to date.
* To avoid port conflicts, ensure that ports 5000 and 4200 are not being used by other applications.