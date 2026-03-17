import joblib

model = joblib.load("aqi_model.pkl")

def predict_aqi(temp, humidity, wind):

    prediction = model.predict([[temp, humidity, wind]])

    return prediction[0]