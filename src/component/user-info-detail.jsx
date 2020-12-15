import React from 'react';
import { CreateForm } from 'sula';
export default (props) => {

    const config = {
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
        submit: {
            url: 'http://localhost:8083/sula/addUserInfo',
            method: 'POST',
            convertParams: ({ result }) => result,
        },
    };


    const { location: { query: { id: idStr} } } = props;
    const idObj = JSON.parse(idStr);
    const { name } = idObj;
    console.log(111, idObj);

    return <CreateForm {...config} />;
};