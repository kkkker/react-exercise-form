import React, { Component } from "react";
import "./myProfile.less";
import "bootstrap/dist/css/bootstrap.css";

class MyProfile extends Component {
  state = {
    name: "Your name",
    gender: "Male",
    description: "Description about yourselt",
    isReadTheTerms: true,
  };

  render() {
    return (
      <div className="my-form">
        <form >
          <h2>My Profile</h2>
          <h6>Name</h6>
          <input
            type="text"
            className="form-control"
            value={this.state.name}
            id="name"
          />
          <h6>Gender</h6>
          <select class="form-control" className="form-control" id="gender">
            <option>Male</option>
            <option>Female</option>
          </select>
          <h6>Description</h6>
          <input
            type="textarea"
            className="form-control"
            value={this.state.description}
            id="description"
          />
          <div class="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={this.state.isReadTheTerms}
              id="isReadTheTerms"
            />
            <label className="form-check-label" htmlFor="isReadTheTerms">
              I have read the terms of conduct
            </label>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default MyProfile;
