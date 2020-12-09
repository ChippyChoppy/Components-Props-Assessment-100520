import React from "react";


class Header extends React.Component {
  text = () => {
    return this.text = "Hello World"
  }
  render() {
    return <h1>{this.text()}</h1>;
  }
}

export default Header;
