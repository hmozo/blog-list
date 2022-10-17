import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPostsAndUsers= ()=> async (dispatch, getState)=>{
    await dispatch(fetchPosts())

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id=> dispatch(fetchUser(id)))
        .value()
}

const fetchPosts=  ()=>{
    return async (dispatch)=>{
        const response= await jsonPlaceholder.get('/posts')

        dispatch( { type: 'FETCH_POSTS', payload: response.data } )
    }
}

const fetchUser= (id)=> async (dispatch)=>{
        const response= await jsonPlaceholder.get(`/users/${id}`)

        dispatch( { type: 'FETCH_USERS', payload: response.data })
}
