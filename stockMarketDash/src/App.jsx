// App.jsx
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import StockRow from "./Components/StockRow";
import Filters from "./Components/Filters";
import SummaryStats from "./Components/SummaryStats";
import NavBar from "./Components/NavBar";
import StockDetail from "./Components/StockDetail";
import Dashboard from "./Components/Dashboard";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      const API_KEY = import.meta.env.VITE_APP_API_KEY;
      const symbols = "AAPL,MSFT,GOOGL,AMZN,NVDA,META,TSLA,JPM,DIS,KO";
      const response = await fetch(
        `https://api.marketstack.com/v1/eod/latest?access_key=${API_KEY}&symbols=${symbols}`
      );
      const data = await response.json();

      const stockList = data.data.map((s) => ({
        symbol: s.symbol,
        exchange: s.exchange,
        close: s.close,
        open: s.open,
        high: s.high,
        low: s.low,
        volume: s.volume,
        change: ((s.close - s.open) / s.open) * 100,
      }));

      setList(stockList);
    };

    fetchStockData().catch(console.error);
  }, []);

  return (
    <div className="whole-page">
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard list={list} />} />
        <Route path="/stock/:symbol" element={<StockDetail />} />
      </Routes>
    </div>
  );
}

export default App;
