🌍 Air Quality Monitor (AQI Visualizer)

A modern full-stack web application for monitoring, analyzing, and predicting Air Quality Index (AQI) across multiple cities with interactive charts and AI-powered insights.

✨ Features

🌆 View AQI for multiple cities

📊 Interactive visualizations:

Line chart for AQI trends over time

Bar chart for pollutant levels (PM2.5, PM10, etc.)

Area chart for AQI variation

Pie chart for pollution distribution

🤖 AI-based AQI prediction system

🔍 Smart city search functionality

📱 Fully responsive UI with modern design

⚡ Fast performance with React + Flask backend

🚀 Getting Started
📋 Prerequisites

Node.js 18.x or higher

npm or yarn

Python 3.8+

⚙️ Installation
1️⃣ Clone the repository
git clone https://github.com/VENM-CYBER/AQI-MONITOR_repo?
cd air-quality-monitor
2️⃣ Setup Backend
cd backend
pip install -r requirements.txt
python app.py
3️⃣ Setup Frontend
cd frontend
npm install
npm start
🌐 Open in Browser
http://localhost:3000
📡 Usage

Search for a city to view AQI data

View interactive charts and pollution insights

Check predicted AQI using AI model

Analyze trends and pollution levels

📊 Expected Data Format

Your dataset/API should include:

Required Fields:

City – Name of the city

AQI – Air Quality Index value

Optional Fields:

PM2.5 – Fine particulate matter

PM10 – Coarse particulate matter

NO2 / SO2 / CO – Pollutant levels

Date/Time – Timestamp for trends

📄 Sample Data Format
city,aqi,pm25,pm10,date
Delhi,180,95,150,2024-01
Mumbai,120,60,110,2024-02
Kolkata,140,80,130,2024-03
Chennai,90,40,70,2024-04
🧪 Sample Data

You can include a sample dataset in the /data or /public folder for testing.

🛠️ Technologies Used

Frontend: React.js / Next.js

Backend: Flask (Python)

Charts: Chart.js / Recharts

Machine Learning: Scikit-learn / LightGBM

API: REST API

Styling: CSS / Tailwind

🏗️ Build for Production
npm run build
npm start
📌 Future Improvements

🌐 Real-time AQI API integration

🔔 Smart AQI alerts & notifications

📱 Mobile app version

🧠 Advanced ML prediction models

🌍 Global AQI heatmap

📄 License

MIT

👨‍💻 About

Built with ❤️ by Archit Deep
Passionate about AI, Web Development & Smart Systems

📊 Project Stats

⭐ Stars: 0

🍴 Forks: 0

👀 Watchers: 0

🔗 Deployment

🚀 Live Demo: (Add your deployed link here)

🤝 Contributors

@VENM-CYBER (Archit Deep)
