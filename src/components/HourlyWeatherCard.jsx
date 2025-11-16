import React from "react";
import { FaCloudRain, FaTint, FaTemperatureHigh } from "react-icons/fa";

export default function HourlyWeatherCard({ jam, cuaca, suhu, kelembapan }) {
  return (
    <div className="hourly-card text-center p-3 rounded">
      <p className="fw-bold">{jam}</p>
      <FaCloudRain size={24} className="mb-2 weather-icon" />
      <p className="mb-1">{cuaca}</p>
      <div className="small">
        <div className="temp d-flex justify-content-center align-items-center">
          <FaTemperatureHigh size={14} className="me-1 text-primary" />
          <span>{suhu}°C</span>
        </div>
        <div className="humidity d-flex justify-content-center align-items-center">
          <FaTint size={14} className="me-1 text-primary" />
          <span>{kelembapan}%</span>
        </div>
      </div>
    </div>
  );
}
