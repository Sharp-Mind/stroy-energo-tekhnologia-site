import { React, Component } from "react";

export default class CurrentDate_component extends Component {
    constructor(props) {
      super(props);    
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
      this.current_year = new Date().getFullYear()
    
    }   

    render() {
        return (
            <p className="footer_current_year">{this.current_year}</p>
        )
    }
}