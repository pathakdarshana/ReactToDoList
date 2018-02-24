import React from "react";

const styleTitles = {
  fontSize: 24
};

export default class List extends React.Component {
  state = {
    list: ["Eggs", "Bread", "Milk", "Coffee"],
    counter: 1,
    text: ""
  };
  handleButtonClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  handleInputChange = e => {
    this.setState({ text: e.target.value });
  };
  handleAddShopping = () => {
    const currentList = this.state.list;
    const newList = currentList.concat(this.state.text);
    this.setState({
      list: newList,
      text: "",
      counter: newList.length
    });
  };
  handleAddEnter = e => {
    if (e.key === "Enter") {
      this.handleAddShopping();
    }
  };

  handleRemove = key => {
    const currentList = this.state.list;
    const newList = currentList.filter((item, index) => index !== key);
    this.setState({
      list: newList,
      counter: newList.length
    });
  };
  render() {
    return (
      <div>
        Count:{this.state.counter}
        <br />
        <h3 style={styleTitles}>{this.props.title}</h3>
        <ul>
          {this.state.list.map((item, key) => (
            <li key={item}>
              {item}
              <button
                style={{ marginLeft: 10, backgroundColor: "red" }}
                onClick={() => this.handleRemove(key)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
        <input
          value={this.state.text}
          onChange={this.handleInputChange}
          onKeyPress={this.handleAddEnter}
        />
        <button onClick={this.handleAddShopping}>Add</button>
      </div>
    );
  }
}
