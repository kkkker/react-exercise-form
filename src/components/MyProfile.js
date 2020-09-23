import React, { Component } from "react";
import "./myProfile.less";
import "bootstrap/dist/css/bootstrap.css";

class MyProfile extends Component {
  state = {
    name: "Your name",
    gender: "Male",
    description: "Description about yourself",
    isReadTheTerms: true,
  };

  handleChange = (name, event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleCheckedChange = (name, event) => {
    this.setState({
      [name]: event.target.checked,
    });
  };

  render() {
    return (
      <div className="my-form">
        <form>
          <h2>My Profile</h2>
          <h6>Name</h6>
          <input
            type="text"
            className="form-control"
            value={this.state.name}
            onChange={(e) => this.handleChange("name", e)}
            id="name"
          />
          <h6>Gender</h6>
          <select
            className="form-control"
            onChange={(e) => this.handleChange("gender", e)}
            id="gender"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <h6>Description</h6>
          <input
            type="textarea"
            className="form-control textarea"
            value={this.state.description}
            onChange={(e) => this.handleChange("description", e)}
            id="description"
          />
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={this.state.isReadTheTerms}
              onChange={(e) => this.handleCheckedChange("isReadTheTerms", e)}
              id="isReadTheTerms"
            />
            <label className="form-check-label" htmlFor="isReadTheTerms">
              I have read the terms of conduct
            </label>
          </div>
          <button
            type="submit"
            disabled={
              !this.state.name ||
              !this.state.gender ||
              !this.state.description ||
              !this.state.isReadTheTerms
            }
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default MyProfile;
