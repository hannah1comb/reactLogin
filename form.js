import React from "react";

export default class Form extends React.Component{
render(){
    return(
        <form>
 
  <div className="form-outline col-12">
    <input type="email" id="form2Example1" className="form-control" />
    <label className="form-label" htmlFor="form2Example1">Email address</label>
  </div>

  <div className="form-outline col-12">
    <input type="password" id="form2Example2" className="form-control" />
    <label className="form-label" htmlFor="form2Example2">Password</label>
  </div>

  <div className="row col-12 text-center">
    <div className="col d-flex justify-content-center">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31"  />
        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col-6">
      <a id = 'textStyle' href="#!">Forgot password?</a>
    </div>
  </div>

  <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

  <div className="text-center col-6">
    <p>Not a member? <a id = 'twoTextStyle'href="#!">Register</a></p>
  </div>
</form>
    )
}



}