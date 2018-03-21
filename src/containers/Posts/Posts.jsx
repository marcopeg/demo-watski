import React from 'react'
import Table from 'antd/lib/table'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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
})

const dispatch2props = {}

const Posts = ({ columns, posts }) => (
    <div className="posts">
        <Table columns={columns} dataSource={posts} />
    </div>
)

Posts.propTypes = {
    columns: PropTypes.any.isRequired, // eslint-disable-line
    posts: PropTypes.any.isRequired, // eslint-disable-line
}

export default connect(state2props, dispatch2props)(Posts)
