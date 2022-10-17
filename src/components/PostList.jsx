import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPostsAndUsers } from '../actions'
import UserHeader from './UserHeader'

const PostList= (props)=>{
    useEffect(()=>{
        props.fetchPostsAndUsers()
    },[])

    const renderList= (posts)=>{
        return posts.map((post)=>{
            return (
                <div className='item' key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.id} - {post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId= {post.userId} />
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="ui relaxed divided list">
            {props.posts.length>0 && renderList(props.posts)}
        </div>
    )
}

const mapStateToProps= (state)=>{
    return {posts: state.posts}
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList)