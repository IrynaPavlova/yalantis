import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../redux/operations";
import styles from "./monthsList.module.css";
import moment from "moment";
import UsersList from "../usersList/UsersList";
import PropTypes from "prop-types";

const allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

class MonthsList extends Component {
  state = {
    showUsers: false,
    selectedMonth: ""
  };

  async componentDidMount() {
    this.props.getUsers();
  }

  handleGetUsers = () => {
    const { users } = this.props;
    const months = allMonths.map(month => {
      let arr = [];
      return {
        month: month,
        users:
          users !== [] &&
          users.filter(user => {
            return (
              month === moment(user.dob).format("MMMM") &&
              (arr = [...arr, { user: user }])
            );
          })
      };
    });

    return months;
  };

  showUsers = event => {
    this.setState({ showUsers: true, selectedMonth: event.target.id });
  };

  closeUsers = () => {
    this.setState({ showUsers: false });
  };
  render() {
    const monthWithUsers = this.handleGetUsers();
    const { showUsers, selectedMonth } = this.state;
    return (
      <div className={styles.container}>
        <ul className={styles.monthsList} onMouseLeave={this.closeUsers}>
          {monthWithUsers.map(month => (
            <li className={styles.monthsListItem} key={month.month}>
              <p
                onMouseOver={event => {
                  this.showUsers(event);
                }}
                id={month.month}
                className={`${styles.month} ${(month.users.length <= 2 &&
                  styles.itemGrey) ||
                  (month.users.length >= 3 &&
                    month.users.length <= 6 &&
                    styles.itemBlue) ||
                  (month.users.length >= 7 &&
                    month.users.length <= 10 &&
                    styles.itemGreen) ||
                  (month.users.length >= 11 && styles.itemRed)}`}
              >
                {month.month}
              </p>
              {showUsers && month.month === selectedMonth && (
                <UsersList users={month.users} />
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

MonthsList.propTypes = {
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthsList);
