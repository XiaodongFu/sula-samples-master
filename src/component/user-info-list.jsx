import React from 'react';
import { Table } from 'sula';


export default () => {
    const config = {
        remoteDataSource: {
            url: 'https://randomuser.me/api',
            method: 'GET',
            convertParams({ params }) {
                return {
                    results: params.pageSize,
                    ...params,
                };
            },
            converter({ data }) {
                return {
                    list: data.results.map((item, index) => {
                        return {
                            ...item,
                            id: `${index}`,
                            name: `${item.name.first} ${item.name.last}`,
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
                render: ({ text }) => {
                    return text === 'male' ? '男' : '女';
                },
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
                                type: 'route',
                                path: '/carry/my?id=#{record.id}',
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
                                path: '/customer/listDetail?id=#{record.id}',
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
                    children: '刷新',
                    type: 'primary',
                },
                action: ['refreshTable'],
            },
            {
                type: 'button',
                props: {
                    children: '刷新 更改过滤参数',
                    type: 'primary',
                },
                action: [
                    ctx => {
                        ctx.table.setPagination({ pageSize: 3 });
                    },
                    {
                        type: 'refreshTable',
                        args: [
                            ctx => ctx,
                            // 设置接口过滤参数
                            {
                                pagination: {
                                    pageSize: 3,
                                },
                            },
                        ],
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