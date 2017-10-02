import React from 'react'

class Measurements extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
    event.preventDefault()
  }

  componentDidMount () {
    console.log(this.state)
  }
  render () {
    return (
      <div>
        <h1>Measurements</h1>
        <form onSubmit={this.handleSubmit}>
          Foot Circumference:
          <input type="text" name="footCircumference"/><br></br>
          Ankle Circumeference:
          <input type="text" name="ankleCircumference"/><br></br>
          Gusset Circumference:
          <input type="text" name="gussetCircumference"/><br></br>
          Foot Length:
          <input type="text" name="footLength"/><br></br>
          Lower Calf Circumference:
          <input type="text" name="lowerCalf"/><br></br>
          Heel Diagonal:
          <input type="text" name="heelDiagonal"/><br></br>
          Toe Length:
          <input type="text" name="toeLength"/><br></br>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default Measurements
