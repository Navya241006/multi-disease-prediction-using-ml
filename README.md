# AI Multi Disease Prediction System

A full-stack AI-powered healthcare application that predicts the risk of multiple diseases using Machine Learning models. The system provides real-time predictions through an interactive React frontend and a Flask backend.

## Features

- Diabetes Disease Prediction
- Heart Disease Prediction
- Kidney Disease Prediction
- Parkinson's Disease Prediction
- Real-time prediction using trained ML models
- Confidence score for each prediction
- User-friendly healthcare dashboard
- Responsive UI with modern design
- REST API integration using Flask
- Input validation for accurate predictions

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Flask
- Flask-CORS
- Python

### Machine Learning
- Scikit-learn
- Pandas
- NumPy
- Joblib

## Project Structure

```
multi-disease-system
│
├── backend
│   ├── app.py
│   ├── diabetes_model.pkl
│   ├── heart_model.pkl
│   ├── kidney_model.pkl
│   ├── parkinsons_model.pkl
│   └── requirements.txt
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/kartikgarg090306-tech/multi-disease-prediction-using-ml.git

cd multi-disease-prediction-using-ml
```

---

## Backend Setup

```bash
cd backend

pip install flask
pip install flask-cors
pip install pandas
pip install numpy
pip install scikit-learn
pip install joblib
pip install pyarrow
```

Run the backend:

```bash
python app.py
```

Backend runs on:

```
http://127.0.0.1:5000
```

---

## Frontend Setup

Open another terminal.

```bash
cd frontend

npm install

npm install axios react-router-dom tailwindcss @tailwindcss/vite lucide-react jspdf
```

Run the frontend:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Usage

1. Open the application.
2. Select a disease.
3. Enter the required medical parameters.
4. Click **Analyze Risk**.
5. View:
   - Prediction Result
   - Confidence Score
   - Risk Assessment

---

## Machine Learning Models

| Disease | Algorithm |
|----------|-----------|
| Diabetes | Random Forest |
| Heart Disease | Random Forest |
| Kidney Disease | Logistic Regression |
| Parkinson's Disease | Random Forest |

---

## Project Highlights

- AI-powered healthcare prediction
- Full-stack web application
- REST API architecture
- Responsive user interface
- Confidence-based predictions
- Modular and scalable design

---

## Future Improvements

- User Authentication
- Prediction History
- PDF Report Generation
- Doctor Recommendations
- Cloud Deployment
- Explainable AI (SHAP)
- Medical Record Management

---

## Author

**Kartik Garg**

LinkedIn: *Add your LinkedIn profile*

GitHub: https://github.com/kartikgarg090306-tech

---

## License

This project is developed for educational and learning purposes.
