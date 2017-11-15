import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

const Button = styled.button`
  width: 180px;
  height: 80px;
  background-color: #1774D7;
  color: white;
  font-size: 2rem;
`

const Pop = styled.div`
  position: absolute;
  width: 500px;
  height: 205px;
  background-color: #FEFFFE;
  color: black;
  font-size: 50px;
  left: calc(50% - 250px);
  top: calc(50% - 102.5px);
  border-radius: 5px;
`

const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: -1;
  animation: fadein 0.2s;
`

const show = { display: 'block' }
const hide = { display: 'none' }

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isToggleOn: true}
    this.toggle = this.toggle.bind(this)
  }

  toggle(event) {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>
          {this.state.isToggleOn ? 'Launch Modal!' : 'Hide Modal!'}
        </Button>
        <Pop className="modal" style={this.state.isToggleOn ? hide : show}>
          <h5>Modal title</h5>
          <h6>Woohoo, you are reading this text in a modal!</h6>
          <i className="fa fa-times" aria-hidden="true" onClick={this.toggle}></i>
          <button className="close" onClick={this.toggle}>Close</button>
          <button className="save">Save changes</button>
        </Pop>
        <Shadow style={this.state.isToggleOn ? hide : show}></Shadow>
      </div>
    )
  }
}

render(<Modal />, document.querySelector('#app'))
