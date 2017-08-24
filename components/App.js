
import React from 'react';
import "./Algorithms";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(
      this.increment.bind(this),
      1000
    )
  }

  increment() {
    this.setState(({ counter }) => {
      return {counter: counter + 1};
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { counter } = this.state;

    return (
      <section>
        <div>MY BOILER PLATE</div>
        <hr/>
        <br/>
        <div>{counter}</div>
        <br/>
        <hr/>
        <br/>
      </section>
    );
  }
}
