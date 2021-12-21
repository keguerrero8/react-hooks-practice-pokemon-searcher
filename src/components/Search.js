import React from "react";

function Search({ searchValue, handleSearch}) {
  //state to manage text inside search
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={searchValue} className="prompt" onChange={handleSearch}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
