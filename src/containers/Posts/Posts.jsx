import React from 'react'
import Table from 'antd/lib/table'

const columns = [{
    title: 'Post title',
    dataIndex: 'title',
    key: 'title',
    render: title => <p>{title}</p>,
}]

const Posts = () => (
    <div className="posts">
        <Table columns={columns} />
    </div>
)

export default Posts
