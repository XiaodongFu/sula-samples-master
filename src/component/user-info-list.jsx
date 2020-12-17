import React from 'react';
import { Table } from 'sula';

import { action } from './detail-action';

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
                    total: data.size,
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
                            type: 'primary',
                            children: '修改',
                            size: 'small',
                        },
                        type: 'link',
                        action: action({
                            title: '用户信息修改',
                            mode: 'edit',
                            url: '',
                            memberId: '#{record.id}',
                            initialValues: {
                                id: '#{record.id}',
                                name: '#{record.name}',
                                nat: '#{record.nat}',
                                email: '#{record.email}',
                                gender: '#{record.gender}',
                            },
                        }),
                    },
                    {
                        props: {
                            children: '删除',
                        },
                        type: 'link',
                        confirm: '是否删除？',
                        action: [
                            {
                                type: 'request',
                                url: 'http://localhost:8083/sula/removeUserInfo',
                                method: 'POST',
                                params: {
                                    id: '#{record.id}',
                                },
                            },
                            'refreshtable',
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
                                path: '/userInfo/detail?id=#{record.id}',
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