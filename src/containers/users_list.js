import React, { Component } from 'react'
import { connect } from 'react-redux'

class UsersList extends Component {
  render() {
    return (
      <div>
        <ul className="col-md-4">
          {this.props.users.map(user => {
            return <li>{user.nom}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default UsersList
