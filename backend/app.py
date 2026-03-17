from flask import Flask, request, jsonify
from flask_cors import CORS
from model import predict_aqi  # your existing ML prediction function

app = Flask(__name__)
CORS(app)


# Home route
@app.route('/')
def home():
    return jsonify({
        "message": "Air Quality AI API Running"
    })


# Forecast route (example static forecast)
@app.route('/forecast')
def forecast():
    return jsonify({
        "predicted_aqi": 135,
        "status": "Moderate",
        "message": "Air quality may worsen in the next few hours"
    })


# Prediction route (updated for next 24h)
@app.route('/predict', methods=['GET', 'POST'])
def predict():

    if request.method == "GET":
        return jsonify({
            "message": "Send POST request with temperature, humidity, wind_speed, hours"
        })

    try:
        data = request.json

        temp = data.get('temperature')
        humidity = data.get('humidity')
        wind = data.get('wind_speed')
        hours = data.get('hours', 1)  # default to 1 hour if not provided

        if temp is None or humidity is None or wind is None:
            return jsonify({
                "error": "Missing parameters"
            }), 400

        # Generate hourly predictions
        predictions = []
        for hour in range(hours):
            aqi = predict_aqi(temp, humidity, wind)
            predictions.append(round(aqi, 2))
            # Optional: you can update temp/humidity/wind for next hour if you have time-series model
            # For now, we assume constant conditions for simplicity

        return jsonify({
            "temperature": temp,
            "humidity": humidity,
            "wind_speed": wind,
            "predicted_aqi": predictions
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)