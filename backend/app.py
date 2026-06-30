from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

diabetes_model = joblib.load("diabetes_model.pkl")
heart_model = joblib.load("heart_model.pkl")
kidney_model = joblib.load("kidney_model.pkl")
parkinsons_model = joblib.load("parkinsons_model.pkl")


@app.route("/")
def home():
    return {"message": "Multi Disease Prediction API Running"}


@app.route("/predict/diabetes", methods=["POST"])
def predict_diabetes():

    data = request.json

    df = pd.DataFrame([data])

    prediction = diabetes_model.predict(df)[0]

    confidence = max(
        diabetes_model.predict_proba(df)[0]
    ) * 100

    return jsonify({
        "prediction": int(prediction),
        "confidence": round(confidence,2)
    })


@app.route("/predict/heart", methods=["POST"])
def predict_heart():

    data = request.json

    df = pd.DataFrame([data])

    prediction = heart_model.predict(df)[0]

    confidence = max(
        heart_model.predict_proba(df)[0]
    ) * 100

    return jsonify({
        "prediction": int(prediction),
        "confidence": round(confidence,2)
    })


@app.route("/predict/kidney", methods=["POST"])
def predict_kidney():

    data = request.json

    df = pd.DataFrame([data])

    prediction = kidney_model.predict(df)[0]

    confidence = max(
        kidney_model.predict_proba(df)[0]
    ) * 100

    return jsonify({
        "prediction": int(prediction),
        "confidence": round(confidence,2)
    })


@app.route("/predict/parkinsons", methods=["POST"])
def predict_parkinsons():

    data = request.json

    df = pd.DataFrame([data])

    prediction = parkinsons_model.predict(df)[0]

    confidence = max(
        parkinsons_model.predict_proba(df)[0]
    ) * 100

    return jsonify({
        "prediction": int(prediction),
        "confidence": round(confidence,2)
    })


if __name__ == "__main__":
    app.run(debug=True)