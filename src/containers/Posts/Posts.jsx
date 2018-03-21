import React from 'react'
import Table from 'antd/lib/table'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setError } from 'reducers/posts-reducer'

const state2props = ({ posts }) => ({
    columns: [{
        title: 'Post title',
        dataIndex: 'title',
        key: 'title',
        render: title => <p>{title}</p>,
    }, {
        title: 'Author ID',
        dataIndex: 'userId',
        key: 'userId',
        render: author => <p>{author}</p>,
    }],
    posts: posts.list,
    error: posts.error,
})

const dispatch2props = {
    onErrorMessageClick: (e) => (dispatch) => {
        dispatch(setError(false))
    },
}

const Posts = ({
    columns,
    posts,
    error,
    onErrorMessageClick,
}) => (
    error ? (
        <p className="error-message" onClick={onErrorMessageClick}>Could not load posts</p> // eslint-disable-line
    ) : (
        <div className="posts">
            <Table columns={columns} dataSource={posts} />
        </div>
    )
)

Posts.propTypes = {
    columns: PropTypes.any.isRequired, // eslint-disable-line
    posts: PropTypes.any.isRequired, // eslint-disable-line
    error: PropTypes.any.isRequired, // eslint-disable-line
    onErrorMessageClick: PropTypes.any.isRequired, // eslint-disable-line
}

export default connect(state2props, dispatch2props)(Posts)
