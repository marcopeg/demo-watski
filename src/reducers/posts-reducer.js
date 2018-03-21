export const initialState = {
    list: [
        // {
        //     key: '1',
        //     title: 'Post 1',
        //     author: 'Author A',
        // }
    ],
    error: false,
}

/**
 * Actions
 */

export const SET_LIST = 'setList@posts'
export const SET_ERROR = 'setError@posts'

export const setList = items => ({
    type: SET_LIST,
    payload: items,
})

export const setError = err => ({
    type: SET_ERROR,
    payload: err,
})


/**
 * Handlers
 */

export const actionHandlers = {
    [SET_LIST]: (state, action) => ({
        ...state,
        list: action.payload,
    }),
    [SET_ERROR]: (state, action) => ({
        ...state,
        error: action.payload,
    }),
}

export const reducer = (state = initialState, action) => {
    const handler = actionHandlers[action.type]
    return handler ? handler(state, action) : state
}

export default reducer
