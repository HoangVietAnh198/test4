import React, { Component } from "react";
class SearchBox extends Component {
  state = {};
  render() {
    let { handleChange } = this.props;
    return (
      <>
        <form className='search'>
          <input type='text' className='input' onChange={handleChange} />
        </form>
      </>
    );
  }
}

export default SearchBox;
