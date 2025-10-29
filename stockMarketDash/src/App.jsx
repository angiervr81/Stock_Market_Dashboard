import {useEffect, useState } from 'react'
import axios from "axios"
import StockRow from './Components/StockRow'
import Filters from "./Components/Filters"
import SummaryStats from "./Components/SummaryStats"
import './App.css' 

const API_KEY = import.meta.env.VITE_APP_API_KEY
function App() {
  const [list, setList] = useState(null)
  const [filteredResults, setFilteredResults] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [exchangeFilter, setExchangeFilter] = useState("")

  useEffect(() => {
    const fetchStockData = async () => {
      try { 
        const symbols = ['AAPL,MSFT,GOOGL,AMZN,NVDA,META,TSLA,JPM,DIS,KOM'];
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
        setFilteredResults(stockList);

      }catch (error) {
        console.error('Error fetching stock data:', error)
      }
    }

    fetchStockData().catch(console.error)
  }, [])

  useEffect(() => {
    if(!list) return

    let results = list.filter((item) => {
      item.symbol.toLowerCase().includes(searchInput.toLowerCase())
    })

    if(exchangeFilter) {
      results = results.filter(
        (item) => 
          item.exchange &&
          item.exchange.toLowerCase().includes(exchangeFilter.toLowerCase())
      )
    }

    setFilteredResults(results)
  }, [searchInput, exchangeFilter, list])

  return (
    <div className='whole-page'>
      <h1>Stock Market Dashboard</h1>
        <Filters
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          exchangeFilter={exchangeFilter}
          setExchangeFilter={setExchangeFilter}
        />
        <SummaryStats stocks={filteredResults} />

        <table className='stock-table'>
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
                <StockRow key={stock.symbol} stock={stock} />
              ))
            ) : (
              <tr>
                <td colSpan='5'>No stocks found.</td>
              </tr>
            )}
          </tbody>  
        </table>
    </div>
  )
}

export default App
