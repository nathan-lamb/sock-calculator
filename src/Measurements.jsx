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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit () {
  }
  render () {
    return (
      <div>
        <h1>Measurements</h1>
        <form onSubmit={this.handleSubmit}>
          Foot Circumference:
          <input type="text" value={this.state.footCircumference} name="footCircumference"/><br></br>
          Ankle Circumeference:
          <input type="text" value={this.state.ankleCircumference} name="ankleCircumference"/><br></br>
          Gusset Circumference:
          <input type="text" value={this.state.gussetCircumference} name="gussetCircumference"/><br></br>
          Foot Length:
          <input type="text" value={this.state.footLength} name="footLength"/><br></br>
          Lower Calf Circumference:
          <input type="text" value={this.state.lowerCalf} name="lowerCalf"/><br></br>
          Heel Diagonal:
          <input type="text" value={this.state.heelDiagonal} name="heelDiagonal"/><br></br>
          Toe Length:
          <input type="text" value={this.state.toeLength} name="toeLength"/><br></br>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default Measurements
