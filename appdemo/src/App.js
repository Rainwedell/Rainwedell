import React from "react";
import "./App.scss";

class App extends React.Component {
  state = {
    val: "",
    list: [],
  };
  handleChange = (event) => {
    let val = event.target.value;
    this.setState({
      val,
    });
  };
  handleAdd = () => {
    let { val, list } = this.state;
    list.push(val);
    this.setState({
      list,
    });
  };
  render() {
    const { val, list } = this.state;
    return (
      <div>
        <p>欢迎来到腾讯课堂</p>
        <h1>hello,world</h1>
        <input type="text" onChange={this.handleChange} value={val} />
        <button onClick={this.handleAdd}>添加</button>
        <ul>
          {list.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
