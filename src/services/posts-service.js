import { setList } from 'reducers/posts-reducer'

export const loadPosts = () => (dispatch) => {
    const posts = [{
        key: '1',
        title: 'Post 1',
        author: 'Author A',
    }, {
        key: '2',
        title: 'Post 2',
        author: 'Author B',
    }, {
        key: '3',
        title: 'Post 3',
        author: 'Author C',
    }]

    setTimeout(() => {
        dispatch(setList(posts))
    }, 500)
}

export const start = () => (dispatch) => {
    dispatch(loadPosts())
}
