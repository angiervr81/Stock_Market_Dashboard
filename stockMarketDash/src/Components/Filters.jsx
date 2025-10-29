import React from "react"

function Filters({
  searchInput,
  setSearchInput,
  exchangeFilter,
  setExchangeFilter,
}) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by symbol..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <select
        value={exchangeFilter}
        onChange={(e) => setExchangeFilter(e.target.value)}
      >
        <option value="">All Exchanges</option>
        <option value="XNAS">NASDAQ</option>
        <option value="XNYS">NYSE</option>
      </select>
    </div>
  )
}

export default Filters
