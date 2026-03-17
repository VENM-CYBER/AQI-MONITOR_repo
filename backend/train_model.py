import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import joblib

# Load dataset
data = pd.read_csv('../data/air_quality_data.csv')

# Features and target
X = data[['temperature', 'humidity', 'wind_speed']]
y = data['aqi']

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = RandomForestRegressor()
model.fit(X_train, y_train)

# Save model
joblib.dump(model, 'aqi_model.pkl')

print("Model trained and saved successfully!")