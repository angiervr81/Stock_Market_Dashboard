import React,{useState, useEffect}from "react"

function StockRow({ stock }) {
  const [showAbout, setShowAbout] = useState(false);
  const [aboutInfo, setAboutInfo] = useState(null);
  const color = stock.change >= 0 ? "green" : "red";

  useEffect(() =>{
    if(showAbout && !aboutInfo){
      const fetchDetails = async () =>{
        try{
          const response = await fetch(
            `https://api.marketstack.com/v1/tickers/${stock.symbol}?access_key=${import.meta.env.VITE_APP_API_KEY}`
          );
          const data = await response.json();
          setAboutInfo(data);
        }catch(error){
          console.error("Error loading company details",error);
        }
      };
      fetchDetails();
    }

  },[showAbout]);

  return (
    <>
    <tr onClick={() => setShowAbout(!showAbout)} style={{ cursor: "pointer" }}>
      <td>
        <span className={stock.change >= 0 ? "arrow-up" : "arrow-down"}>
          {stock.change >= 0 ? "▲" : "▼"}
        </span>{" "}
        {stock.symbol}
      </td>
      <td>${stock.close.toFixed(2)}</td>
      <td style={{ color }}>{stock.change.toFixed(2)}%</td>
      <td>{stock.volume.toLocaleString()}</td>
      <td>{stock.exchange || "N/A"}</td>
    </tr>
    {showAbout && (
        <tr className="about-row">
          <td colSpan="5">
            {aboutInfo ? (
              <>
                <h4>{aboutInfo.name}</h4>
                <p>Exchange: {aboutInfo.stock_exchange?.name || "N/A"}</p>
                <p>Country: {aboutInfo.country || "N/A"}</p>
              </>
            ) : (
              <p>Loading details...</p>
            )}
          </td>
        </tr>
      )}
    </>
  );
}

export default StockRow
