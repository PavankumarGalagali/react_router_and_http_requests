import React, { Component } from "react";

export default class Login extends Component {

    state={
        user:"",
        pwd:""
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("handle Submit");
        console.log(this.state);
        localStorage.setItem(this.state.user , JSON.stringify(this.state));
        this.setState({
            user:"",
            pwd:""
        })

        this.props.history.push("/home")
    }

    handleChange =(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
   

  render() {
    return (
      <div className="container card mt-5 col-md-6">
        <form  className="card-body"  onSubmit={this.handleSubmit}  >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.user}
              onChange={this.handleChange}
              name="user"
            />
          
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={this.state.pwd}
              onChange={this.handleChange}
              name="pwd"
            />
          </div>
         
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
