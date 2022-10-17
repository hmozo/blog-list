import { connect } from 'react-redux'
import { useEffect } from 'react';

const UserHeader= (props)=>{
    const { user, userId }= props

    if (!user){
        return null;
    }

    return (
        <div className="header">{userId} - {user.name}</div>
    )
}

const mapStateToProps= (state, ownProps)=>{
    return { user: state.users.find(user=>user.id===ownProps.userId) }
}

export default connect(mapStateToProps)(UserHeader)