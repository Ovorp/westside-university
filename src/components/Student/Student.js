import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Student extends Component {
  constructor() {
    super();

    this.state = {
      studentInfo: {},
    };
  }

  componentDidMount = () => {
    const ID_GOES_HERE = this.props.match.params.id;
    axios
      .get(`http://localhost:3005/students/${ID_GOES_HERE}`)
      .then((res) => {
        this.setState({
          studentInfo: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { first_name, last_name, grade, email } = this.state.studentInfo;
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>
          {first_name} {last_name}
        </h1>
        <h3>Grade: {grade}</h3>
        <h3>Email: {email}</h3>
        {/* <Link to={}> */}
        <button onClick={this.props.history.goBack}>Go Back!</button>
        {/* </Link> */}
      </div>
    );
  }
}
