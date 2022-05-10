import React from  'react'
import { render } from 'react-dom'

export  default class Layers extends React.Component{
 render(){
   consttuctor(props){
     super(props)
     active = this.menuBtn[0]

   }
   return(
    this.props.menuButton.map((it, p) => (
    <div
    id={it.text}
    style={this.menuBtn.all}
    onClick={() => (
      (this.active = this.props.text),
      this.chechActive(it.text),
      console.log(this.active),
      ReactDOM.render(
        this.menuButton[p].handler(),
        document.getElementById("listOve")
      )
    )}
  >
    {it.text}
  </div>
))
  
)}}