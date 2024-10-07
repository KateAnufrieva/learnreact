import React from "react"

class Header extends React.Component {  //компонент
   render(){
    return(
    <header className="header">
      {this.props.title}
      </header>
    )
   }
}

export default Header