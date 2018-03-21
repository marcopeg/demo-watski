import { setList, setError } from 'reducers/posts-reducer'
import { getJSON } from 'lib/request'

export const fetchPostsList = () => async (dispatch) => {
    const resourceName = 'posts'
    const baseUrl = 'https://jsnplaceholder.typicode.com/'
    const url = `${baseUrl}${resourceName}`
    try {
        const response = await getJSON(url)
        return response
    } catch (err) {
        const errorMessage = `${err} ${resourceName} using url ${url}`
        dispatch(setError(errorMessage))
        throw (errorMessage)
    }
}

export const loadPosts = () => async (dispatch) => {
    const posts = await dispatch(fetchPostsList())
    dispatch(setList(posts))
}

export const start = () => (dispatch) => {
    dispatch(loadPosts())
}
