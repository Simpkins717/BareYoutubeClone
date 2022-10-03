import React from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    // Make sure we call callback from parent componenet
    onFormSubmit(term);
  };
  return (
    <div className="ui segment search-bar">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Search for a Video</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
