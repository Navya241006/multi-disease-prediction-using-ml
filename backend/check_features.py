import joblib

models = [
    "heart_model.pkl",
    "kidney_model.pkl",
    "parkinsons_model.pkl"
]

for m in models:
    model = joblib.load(m)
    print("\n", m)

    try:
        print(model.feature_names_in_)
    except:
        print("No feature_names_in_ found")