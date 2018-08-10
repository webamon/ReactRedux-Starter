import React, { Component } from 'react'
import { connect } from 'react-redux'

class UsersList extends Component {
  render() {
const {myUsers} = this.props

    return (
      <div>
        <ul className="col-md-4">
          {myUsers.map(user => {
            return <li>{user.nom}</li>
          })}
        </ul>
      </div>
    )
  }
}


function mapStateToProps(state){
  return  {
    myUsers : state.users
  }
}

export default connect(mapStateToProps)(UsersList)