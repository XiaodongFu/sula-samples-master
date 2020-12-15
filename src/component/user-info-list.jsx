import React from 'react';
import { Table } from 'sula';


export default () => {
    const config = {
        remoteDataSource: {
            url: 'http://localhost:8083/sula/queryUserInfo',
            method: 'POST',
            convertParams({ params }) {
                return {
                    results: params.pageSize,
                    ...params,
                };
            },
            converter({ data }) {
                return {
                    list: data.map((item, index) => {
                        return {
                            ...item,
                        };
                    }),
                    total: 100,
                };
            },
        },
        columns: [
            {
                key: 'id',
                title: 'ID',
            },
            {
                key: 'name',
                title: '姓名',
            },
            {
                key: 'nat',
                title: '国家',
            },
            {
                key: 'gender',
                title: '性别',
            },
            {
                key: 'email',
                title: '邮箱',
            },
            {
                key: 'operator',
                title: '操作',


                render: [
                    {
                        props: {
                            children: '修改 ',
                        },
                        type: 'link',
                        action: [
                            {
                                type: 'route',
                                path:
                                    '/am/detail?openId=#{record.id}&name=#{record.staffName}&dep=#{record.department}&gender=#{record.sexText}',
                            },
                        ],
                    },
                    {
                        props: {
                            children: '删除',
                        },
                        type: 'link',
                        action: [
                            {
                                type: 'url',
                                path: 'http://localhost:8083/sula/removeUserInfo',
                            },
                        ],
                    },
                    {
                        props: {
                            children: '详情',
                        },
                        type: 'link',
                        action: [
                            {
                                type: 'route',
                                path: '/userInfo/detail?id=#{JSON.stringify(record)}',
                            },
                        ],
                    },
                ],
            },
        ],
        actionsRender: [
            {
                type: 'button',
                props: {
                    children: '新增',
                    type: 'primary',
                },
                action: [
                    {
                        type: 'route',
                        path: '/userInfo/add',
                    },
                ],
            },
        ],
        rowKey: 'id',
    };
    return (
        <div
            style={{ background: 'rgb(241, 242, 246)', padding: 16, marginTop: 16 }}
        >
            <Table {...config} />
        </div>
    );
};