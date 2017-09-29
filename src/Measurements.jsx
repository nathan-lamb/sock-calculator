import React from 'react'

class Measurements extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      footCircumference: [],
      ankleCircumference: [],
      gussetCircumference: [],
      footLength: [],
      lowerCalf: [],
      heelDiagonal: [],
      toeLength: []
    }
  }
  render () {
    return (
      <div>
        <h1>Measurements</h1>
        <form onSubmit={this.handleSubmit}>
          Foot Circumference:
          <input type="text"/><br></br>
          Ankle Circumeference:
          <input type="text"/><br></br>
          Gusset Circumference:
          <input type="text"/><br></br>
          Foot Length:
          <input type="text"/><br></br>
          Lower Calf Circumference:
          <input type="text"/><br></br>
          Heel Diagonal:
          <input type="text"/><br></br>
          Toe Length:
          <input type="text"/><br></br>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default Measurements
