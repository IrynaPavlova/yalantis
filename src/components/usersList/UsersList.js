import React from "react";
import PropTypes from "prop-types";
import styles from "./usersList.module.css";
import moment from "moment";

const UsersList = ({ users }) => (
  <ul className={styles.usersList}>
    {users.map(user => (
      <li key={user.id}>
        <p>
          {`${user.firstName} ${user.lastName}`}
          <span>{` (${moment(user.dob).format("DD.MM.YY")})`}</span>
        </p>
      </li>
    ))}
  </ul>
);

export default UsersList;

UsersList.propTypes = {
  users: PropTypes.array
};
