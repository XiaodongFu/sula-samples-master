import React from 'react';
import { CreateForm } from 'sula';
export default (props) => {

    const { location: { query:  idStr } } = props;
    console.log('aa',props);


    const config = {
        actionsPosition:'center',
        mode:'view',
        layout: 'vertical',
        itemLayout: {
            span: 8,
        },
        fields: [
            {
                name: 'name',
                label: '姓名',
                field: 'input',
            },
            {
                name: 'nat',
                label: '国家',
                field: 'input',
            },
            {
                name: 'id',
                label: 'ID',
                field: 'input',
            },
            {
                name: 'gender',
                label: '性别',
                field: 'input',
            },
            {
                name: 'email',
                label: '邮箱',
                field: 'input',
                itemLayout: {
                    span: 8,
                },
            },
            {
                name: 'others',
                label: '其他信息',
                field: 'input',
                itemLayout: {
                    span: 8,
                },
            },
        ],
        //
        // submit: {
        //     url: 'http://localhost:8083/sula/addUserInfo',
        //     method: 'POST',
        //     convertParams: ({ result }) => result,
        // },

        remoteValues: {
            url: 'http://localhost:8083/sula/queryUserInfoById',
            method: 'POST',
            params: {
                ...idStr,
            },
        },
    };

    return <CreateForm {...config} />;
};