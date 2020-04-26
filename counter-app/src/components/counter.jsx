import React, { Component } from "react";

class Counter extends Component {
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  render() {
    return (
      <div>
        <span className={this.getbatchclasses()}>{this.formatcount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm mt-1"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-small m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getbatchclasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatcount() {
    const { value: count } = this.props.counter;
    return count === 0 ? " Zero " : count;
  }
}

export default Counter;
