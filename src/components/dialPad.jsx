import React, { Component } from "react";

class dialPad extends Component {
  state = {
    count: 0,
  };

  styles = {
    fontSize: 100,
    width: 170,
  };

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement(product) {
    this.setState({ count: (this.state.count = product) });
  }

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <div>
          <button
            style={this.styles}
            onClick={() => this.handleIncrement(1)}
            className="btn btn-secondary btn-lg"
          >
            1
          </button>
          <button
            style={this.styles}
            onClick={() => this.handleIncrement(2)}
            className="btn btn-secondary btn-lg"
          >
            2
          </button>
          <button
            style={this.styles}
            onClick={() => this.handleIncrement(3)}
            className="btn btn-secondary btn-lg"
          >
            3
          </button>
        </div>
        <div>
          <button
            style={this.styles}
            onClick={() => this.handleIncrement(4)}
            className="btn btn-secondary btn-lg"
          >
            4
          </button>
          <button
            style={this.styles}
            onClick={() => this.handleIncrement(5)}
            className="btn btn-secondary btn-lg"
          >
            5
          </button>
          <button
            style={this.styles}
            onClick={() => this.handleIncrement(6)}
            className="btn btn-secondary btn-lg"
          >
            6
          </button>
        </div>
        <div>
          <button
            style={this.styles}
            onClick={() => this.handleIncrement(7)}
            className="btn btn-secondary btn-lg"
          >
            7
          </button>
          <button
            style={this.styles}
            onClick={() => this.handleIncrement(8)}
            className="btn btn-secondary btn-lg"
          >
            8
          </button>
          <button
            style={this.styles}
            onClick={() => this.handleIncrement(9)}
            className="btn btn-secondary btn-lg"
          >
            9
          </button>
        </div>
        <div>
          <button
            style={this.styles}
            onClick={() => this.handleIncrement("*")}
            className="btn btn-secondary btn-lg"
          >
            *
          </button>
          <button
            style={this.styles}
            onClick={() => this.handleIncrement(0)}
            className="btn btn-secondary btn-lg"
          >
            0
          </button>
          <button
            style={this.styles}
            onClick={() => this.handleIncrement("#")}
            className="btn btn-secondary btn-lg"
          >
            #
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-pill m-2 w-25 badge-";
    classes += this.state.count === 0 ? "success" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default dialPad;
