import React from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = React.useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // Make sure we call callback from parent componenet
    onFormSubmit(term);
  };
  return (
    <div className="ui segment search-bar">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            type="text"
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
