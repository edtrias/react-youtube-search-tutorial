import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {term: '', placeholder: 'Write here...'}
  }
  render() {
    return (
      <div className="search-bar">
        <input
          placeholder={this.state.placeholder}
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
