import React from "react";

function StockRow({stock}) {
    const color = stock.change >= 0 ? "grean" : "red"
    return (
        <tr>
            <td>{stock.symbol}</td>
            <td>${stock.close.toFixed(2)}</td>
            <td>style={{ color }}>{stock.change.toFixed(2)}%</td>
            <td>{stock.volume.toLocaleString()}</td>
            <td>{stock.exchange || "N/A"}</td>
        </tr>
    )
}

export default StockRow