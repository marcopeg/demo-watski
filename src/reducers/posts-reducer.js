export const initialState = {
    list: [
        // {
        //     key: '1',
        //     title: 'Post 1',
        //     author: 'Author A',
        // }
    ],
}

/**
 * Actions
 */

export const SET_LIST = 'setList@posts'

export const setList = items => ({
    type: SET_LIST,
    payload: items,
})


/**
 * Handlers
 */

export const actionHandlers = {
    [SET_LIST]: (state, action) => ({
        ...state,
        list: action.payload,
    }),
}

export const reducer = (state = initialState, action) => {
    const handler = actionHandlers[action.type]
    return handler ? handler(state, action) : state
}

export default reducer
