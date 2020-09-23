import React, { Component } from "react";
import "./myProfile.less";

class MyProfile extends Component {
  state = {
    name: "Your name",
    gender: "Male",
    description: "Description about yourselt",
    isReadTheTerms: true
  };

  render() {
    return (
      <form>
        <h2>My Profile</h2>
        <h6>Name</h6>
        <input type="text" value={this.state.name} id="name" />
        <h6>Gender</h6>
        <select class="form-control" id="gender">
          <option>Male</option>
          <option>Female</option>
        </select>
        <h6>Description</h6>
        <input type="textarea" value={this.state.description} id="description" />
        <input type="checkbox" checked={this.state.isReadTheTerms} id="isReadTheTerms" />
        <label htmlFor="isReadTheTerms">I have read the terms of conduct</label>
        <button>Submit</button>
      </form>
    );
  }
}

export default MyProfile;
