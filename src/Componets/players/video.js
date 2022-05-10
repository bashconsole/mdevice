import React from "react";

export default class VideoPlayer extends React.Component {
  render() {
    return (
      <div>
        <video controls>
          <source src={this.props.source} />
        </video>
      </div>
    );
  }
}
