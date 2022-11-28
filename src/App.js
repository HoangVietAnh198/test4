import React, { Component } from "react";
import "./App.css";
import CharacterContainer from "./components/CharacterContainer";
class App extends Component {
  state = {
    data: [],
    value: "",
  };
  componentDidMount = () => {
    fetch("https://breakingbadapi.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleChange = (e) => {
    let name = e.target.value;
    console.log(name);
    fetch(`https://www.breakingbadapi.com/api/characters?name=${name}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          data: data,
          value: name,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <CharacterContainer
          data={this.state.data}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

export default App;
