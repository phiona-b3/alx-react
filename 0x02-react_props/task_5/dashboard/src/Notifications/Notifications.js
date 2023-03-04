import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

function Notifications({ displayDrawer }) {
  return (
    <React.Fragment>
      {displayDrawer ? (
        <div className="'flex-area'">
          <div className="menuItem">
            <p>Your Notifications</p>
          </div>
          <div className="Notifications">
            <ul>
              {listNotifications && listNotifications.length > 0 ? (
                listNotifications.map(({ id, html, type, value }) => (
                  <>
                    <NotificationItem key={id} type={type} value={value} html={html} />
                  </>
                ))
              ) : (
                <div className="">
                  <NotificationItem value="No new notification for now" />
                  <button 
                    style={{ color:"#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontsize: "15px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
                    aria-label="close"
                    onClick={console.log("Close button has been clicked")}
                  >
                    <img src={closeIcon} alt="closeIcon" />

                  </button>
               </div>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div className="menuItem">
          <p>Your notification</p>
        </div>
      )}
    </React.Fragment>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;