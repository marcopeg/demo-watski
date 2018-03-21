import { setList } from 'reducers/posts-reducer'
import { getJSON } from 'lib/request'

export const fetchPostsList = () => () => getJSON('https://jsonplaceholder.typicode.com/posts')

export const loadPosts = () => async (dispatch) => {
    const posts = await dispatch(fetchPostsList())
    dispatch(setList(posts))
}

export const start = () => (dispatch) => {
    dispatch(loadPosts())
}
