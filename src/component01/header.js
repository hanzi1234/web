import React from "react";

class Header extends React.Component {
  state = {
    data: ""
  };

  render() {
    return (
      <div
        style={{
          padding: 20,
          border: "1px solid #575757",
          background: "#BEBEBE",
          width: "100%"
        }}
      >
        <input
          value={this.state.data}
          onChange={e => this.setState({ data: e.target.value })}
          type="text"
        />

        <button onClick={() => this.addData()}>Add</button>
      </div>
    );
  }

  addData = () => {
    this.props.onAdd(this.state.data);
    this.setState({ data: "" });
  };
}
export default Header;
