import React from 'react';

class DummyPage extends React.Component {
  render() {
    return (
      <div>
        <h3>
          This is the <span style={{ color: "red" }}>{this.props.text}</span>{" "}
          page
        </h3>
        <a
          href="https://github.com/IanB64/React-SideNav"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to check the code on GitHub
        </a>
        <p>This side navigation component is built in React and Redux.</p>
      </div>
    );
  }
}

export default DummyPage;
