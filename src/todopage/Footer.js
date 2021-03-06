import React, { Component } from 'react';
const {Button, ButtonDelete} =  require('../utils/helpers');

class Footer extends Component {
    isActive = (text) => {
        let filter = this.props.filter === text ? "active" : "";
        return `footer__button ${filter}`
    }
  
    render() {
      return (
        <footer className="footer">
            <Button className={this.isActive}  text="All" setActiveFilter={this.props.setActiveFilter} />
            <Button className={this.isActive} text="Active" setActiveFilter={this.props.setActiveFilter}/>
            <Button className={this.isActive}  text="Completed" setActiveFilter={this.props.setActiveFilter}/>
        </footer>
      )
    }
  
}
 
export default Footer;