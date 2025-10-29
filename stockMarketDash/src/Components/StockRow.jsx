import React,{useState}from "react"

function StockRow({ stock }) {
  const [showAbout, setShowAbout] = useState(false);
  const color = stock.change >= 0 ? "green" : "red"
  return (
    <>
    <tr onClick={() => setShowAbout(!showAbout)} style={{ cursor: "pointer" }}>
      <td>{stock.symbol}</td>
      <td>${stock.close.toFixed(2)}</td>
      <td style={{ color }}>{stock.change.toFixed(2)}%</td>
      <td>{stock.volume.toLocaleString()}</td>
      <td>{stock.exchange || "N/A"}</td>
    </tr>
    {showAbout && (
      <tr className="about-row">
        <p><strong>{stock.symbol}</strong>traded on {stock.exchange || "N/A"}.</p>
        <p>Open: ${stock.open.toFixed(2)} | High: ${stock.high.toFixed(2)} | Low: ${stock.low.toFixed(2)}</p>
      </tr>
    )}
    </>
  );
}

export default StockRow
