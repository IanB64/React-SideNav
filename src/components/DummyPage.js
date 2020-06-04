import React from 'react';

class DummyPage extends React.Component {
  render() {
    return (
      <div>
        <h2>
          This is the <span style={{ color: "red" }}>{this.props.text}</span>{" "}
          page
        </h2>
        <h4>Want to check the full code on GitHub? Click the link at the top-right corner!</h4>
        <p>This page is a demo for the Side Navigation(SideNav) component built in React and Redux</p>
      </div>
    );
  }
}

export default DummyPage;
