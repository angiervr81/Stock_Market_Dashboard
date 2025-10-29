import React from 'react';

function SummaryStats({stocks}) {
    if (!stocks || stocks.length === 0) return null
    
  const avgChange =
    stocks.reduce((sum, s) => sum + s.change, 0) / stocks.length
  const totalVolume = stocks.reduce((sum, s) => sum + s.volume, 0)
  const topGainer = stocks.reduce((max, s) =>
    s.change > max.change ? s : max
  )

  return (
    <div className='summary'>
        <div className='card'>
            <h3>Total Stocks</h3>
            <p>{stocks.length}</p>
        </div>
        <div className='card'>
            <h3>Average Change (%)</h3>
            <p>{avgChange.toFixed(2)}%</p>
        </div>
        <div className='card'>
            <h3>Top Gainer</h3>
            <p>{topGainer.symbol}</p>
        </div>
        <div className='card'>
            <h3>Total Volume</h3>
            <p>{totalVolume.toLocaleString()}</p>
        </div>
    </div>
  )

}

export default SummaryStats;