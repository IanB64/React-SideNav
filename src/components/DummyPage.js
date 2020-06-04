import React from "react";

class DummyPage extends React.Component {
  render() {
    return (
      <div>
        {this.props.invalid ? (
          <h2>
            <span style={{ color: "red" }}>Error 404 - page not found.</span>
            <br />
            The url you entered was not found. Click{" "}
            <a href={process.env.PUBLIC_URL + "/cs-home"}>here</a> to go to the
            home page
          </h2>
        ) : (
          <h2>
            This is the <span style={{ color: "red" }}>{this.props.text}</span>{" "}
            page
          </h2>
        )}
        
        <h4>
          Want to check the full code on GitHub? Click the link at the top-right
          corner!
        </h4>
        <p>
          This page is a demo for the Side Navigation(SideNav) component built
          in React and Redux
        </p>
      </div>
    );
  }
}

export default DummyPage;
