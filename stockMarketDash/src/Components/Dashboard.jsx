import Filters from "./Filters";
import SummaryStats from "./SummaryStats";
import StockRow from "./StockRow";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

function Dashboard({ list }) {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [exchangeFilter, setExchangeFilter] = useState("");

  useEffect(() => {
    if (!list) return;
    let results = list.filter((item) =>
      item.symbol.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (exchangeFilter) {
      results = results.filter(
        (item) =>
          item.exchange &&
          item.exchange.toLowerCase().includes(exchangeFilter.toLowerCase())
      );
    }
    setFilteredResults(results);
  }, [searchInput, exchangeFilter, list]);

  return (
    <div>
      <h1 style={{ color: "#138138ff", fontSize: "3rem", fontWeight: "600" }}>
        Stock Market Dashboard
      </h1>

        <Filters
          id="search-section"
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          exchangeFilter={exchangeFilter}
          setExchangeFilter={setExchangeFilter}
        />

      <SummaryStats stocks={filteredResults} />

   
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
        <LineChart width={400} height={250} data={filteredResults}>
          <Line type="monotone" dataKey="close" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="symbol" />
          <YAxis />
          <Tooltip />
        </LineChart>

        <BarChart width={400} height={250} data={filteredResults}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="symbol" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="volume" fill="#82ca9d" />
        </BarChart>
      </div>

      <table className="stock-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Change</th>
            <th>Volume</th>
            <th>Exchange</th>
          </tr>
        </thead>
        <tbody>
          {filteredResults?.length > 0 ? (
            filteredResults.map((stock) => (
              <tr key={stock.symbol}>
                <td>
                  <Link to={`/stock/${stock.symbol}`}>{stock.symbol}</Link>
                </td>
                <td>${stock.close.toFixed(2)}</td>
                <td style={{ color: stock.change >= 0 ? "green" : "red" }}>
                  {stock.change.toFixed(2)}%
                </td>
                <td>{stock.volume.toLocaleString()}</td>
                <td>{stock.exchange || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No stocks found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
