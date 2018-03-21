import { setList } from 'reducers/posts-reducer'
import { getJSON } from 'lib/request'

export const fetchPostsList = () => async () => {
    const resourceName = 'posts'
    const baseUrl = 'https://jsonplaceholder.typicode.com/'
    const url = `${baseUrl}${resourceName}`
    try {
        const response = getJSON(url)
        return response
    } catch (err) {
        const errorMessage = `failed to fetch ${resourceName}`
        console.log(errorMessage)
        throw (Error(err))
    }
}

export const loadPosts = () => async (dispatch) => {
    const posts = await dispatch(fetchPostsList())
    dispatch(setList(posts))
}

export const start = () => (dispatch) => {
    dispatch(loadPosts())
}
