import React from "react";
import Form from "./form";
import NavBar from "./navBar";
import '../App.css'

export default class MainContainer extends React.Component {
    render() {
        return (
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">

                    </div>
                </div>
                <div className="row">
                    <div className="col-4 mx-auto">
                        <h3 id = 'headingStyle'>Log in:</h3>
                       
                    </div>
                </div>
            </div>
        )
    }
}