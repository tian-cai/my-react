import React from "react"

class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }
  componentDidMount() {
    let id = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
    this.id = id
  }
  componentWillUnmount() {
    clearImmediate(this.id)
  }

  render() {
    return (
      <div style={{ display: "inline-block", verticalAlign: "middle" }}>
        <h1>Hello World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Hello
