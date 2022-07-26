import React, { Component } from "react";
import "./App.css"

class ClassForm extends Component {
  constructor() {
    super();

    this.state = {
      person: [
        { name: " Orison", email: "orisontetteh@gmail", password: 1111111 },
        {
          name: " Chunkz",
          email: "chunkz@gmail.com",
          password: 22222,
        },
      ],
      name: "",
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
        e.preventDefault();
        const newPerson ={
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
    }
    this.setState({
        person: [...this.state.person, newPerson],
        name: "",
        email: "",
        password: "",
    })
  }

  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label className="label-1">Name</label>
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label className="label-2">Email</label>
            <input
              type="email"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label className="label-3">Password</label>
            <input
              type="password"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <label className="label-4">Click Submit </label>
          <button>Submit</button>
        </form>

        {this.state.person.map((item, index) => {
          return (
            <div id="field" key={index}>
              <h2>Name: {item.name}</h2>
              <h2>Email: {item.email}</h2>
              <h2>Password: {item.password}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ClassForm;
