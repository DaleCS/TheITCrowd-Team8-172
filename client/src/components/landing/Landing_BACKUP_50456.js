// React imports
import React, { Component } from "react";
import styles from './Landing.module.css';
import Button from 'react-bootstrap/Button';

// Redux imports
import { connect } from "react-redux";
import { getLandingData } from "../../actions/landingActions";

class Landing extends Component {
  componentDidMount = () => {
    // Example of redux, reducer, and action calls
    this.props.getLandingData();
  };

  nextPath(path) {
    this.props.history.push(path);
  }

  render () {
    return (
      <div className = {styles.background}>  
          <div className = {[styles.image, styles.image1].join(' ')}>
            <div className = {styles.opacity}>
              <div className = {styles.text}>
                <h1>Your first TODO list marks the first day of a stress-free life.<br/></h1>
                <Button variant = "dark" size = "lg" onClick = {() => this.nextPath('./register')}>
                  Register
                </Button>
              </div>
            </div>
          </div>
          <div className = {[styles.image, styles.image2].join(' ')}>
            <div className = {styles.opacity}>
              <div className = {[styles.text, styles.content].join(' ')}>
                <h1>About<br />TODO</h1>
<<<<<<< HEAD
                <p className = {styles.p}>
=======
                <p>
>>>>>>> 3c72ebd03422dff6f741e283077368cc0388a443
                  TODO helps you organize different sectors of your life within a single application.
                  Finish tasks, errands, assignments, and more by creating customized to-do lists.<br/><br/>
                
                
                  With additional organizational tools to categorize your to-do lists based on your needs,
                  you can tackle your daily tasks and accomplish milestones to your longer-term goals. 
                  Increase your productivity by having a holisitic view of all the tasks you want to
                  accomplish today, tomorrow, and more.
                
                <br/><br/><b>So why not start now?</b></p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getLandingData }
)(Landing);