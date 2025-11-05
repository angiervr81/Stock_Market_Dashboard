// Components/StockDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function StockDetail() {
  const { symbol } = useParams();
  const [details, setDetails] = useState(null);
  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `https://api.marketstack.com/v1/tickers/${symbol}?access_key=${API_KEY}`
        );
        const data = await response.json();
        setDetails(data);
      } catch (err) {
        console.error("Error fetching details", err);
      }
    };
    fetchDetails();
  }, [symbol]);

  if (!details) return <p style={{ color: "white" }}>Loading...</p>;

  return (
    <div
      className="detail-container"
      style={{
        background: "rgba(0, 0, 0, 0.7)",
        color: "white",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 0 15px rgba(0, 255, 149, 0.32)",
        textAlign: "left",
        maxWidth: "700px",
        margin: "2rem auto",
      }}
    >
      <h2 style={{ color: "#4fb346ff" }}>
        {details.name || symbol} ({symbol})
      </h2>
      <p>
        <strong>Exchange:</strong> {details.stock_exchange?.name || "N/A"}
      </p>
      <p>
        <strong>Country:</strong> {details.country || "N/A"}
      </p>
      <p>
        <strong>Has Intraday Data:</strong>{" "}
        {details.has_intraday ? "Yes" : "No"}
      </p>
      <p>
        <strong>Has EOD Data:</strong> {details.has_eod ? "Yes" : "No"}
      </p>
      <p>
        <strong>MIC:</strong> {details.stock_exchange?.mic || "N/A"}
      </p>

      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "1.5rem",
          color: "#4fb346ff",
          textDecoration: "none",
          border: "1px solid rgba(0, 255, 149, 0.32)",
          borderRadius: "8px",
          padding: "0.5rem 1rem",
        }}
      >
        ← Back to Dashboard
      </Link>
    </div>
  );
}

export default StockDetail;
