import React from "react";
import './App.css';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";

const listCourses = {
  { id: 1, name: "Es6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
};

const listNotifications = {
  {id: 1, type: "default", value: "New course available" },
  {id: 2, type: "urgent", value: "New resume available" },
  {id: 1, type: "urgent", html: getLatestNotification() },
};

function App(isLoggedIn) {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Notifications listNotifications={listNotifications} />
        <Header />
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
