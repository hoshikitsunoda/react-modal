import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: #F5F6F5;
`

const Pop = styled.div`
  width: 500px;
  height: 300px;
  background-color: #282C33;
  color: white;
  text-align: center;
  font-size: 50px;
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
        <Pop className="modal" style={this.state.isToggleOn ? hide : show}>Modal!</Pop>
      </div>
    )
  }
}

render(<Modal />, document.querySelector('#app'))
