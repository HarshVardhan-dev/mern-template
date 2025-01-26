import React, { useEffect, useState } from "react";
import API from "../api/api";
import { PulseLoader } from "react-spinners"; // Install with npm install react-spinners
import "./Home.css"; // Create this CSS file

const Home = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.get("/")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to load welcome message 🚨");
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="gradient-text">🚀 Welcome to MERN Template</h1>
        <p className="subtitle">
          Start building amazing full-stack applications!
        </p>
      </div>

      {loading ? (
        <div className="loading-container">
          <PulseLoader color="#6366f1" size={15} />
          <span className="loading-text">Initializing Awesome...</span>
        </div>
      ) : error ? (
        <div className="error-card">⚠️ {error}</div>
      ) : (
        <div className="data-card">
          <div className="card-header">
            <span className="emoji">📨</span>
            <h3>Server Message</h3>
          </div>
          <p className="card-content">{data}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
