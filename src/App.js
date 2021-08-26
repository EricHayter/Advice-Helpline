import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      advice: ''
    };
    this.newAdvice = this.newAdvice.bind(this);
    this.randomBackgroundClr = this.randomBackgroundClr.bind(this);
  }

  randomBackgroundClr() {
    document.body.style.background = "hsl(" + Math.round(Math.random() * 360) + ",50%,70%)";
  }

  newAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      this.setState({
        id: data.slip.id,
        advice: data.slip.advice
      })
      this.randomBackgroundClr()
    })
  }

  componentDidMount() {
    this.newAdvice()
  }

  render () {
    let msgLen = this.state.advice.length + 13
    const style = {
      width: `${msgLen}ch`,
      animation: `typing ${(msgLen)*0.09}s steps(${msgLen}), blink .5s step-end infinite alternate`,
    }

    return (
      <div className="wrapper">
        <div style={style} className="typing-effect" key={this.state.id}>Advice #{this.state.id}: {this.state.advice}</div>
        <button className="advice-button" onClick={this.newAdvice}>More Advice</button>
      </div>
    );
  }

}

export default App;
