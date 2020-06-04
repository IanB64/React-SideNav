import React from "react";

class DummyPage extends React.Component {
  render() {
    return (
      <div>
        <h3>
          This is the <span style={{ color: "red" }}>{this.props.text}</span>{" "}
          page
        </h3>
      </div>
    );
  }
}

export default DummyPage;
