
export const action = ({ title, mode, url, memberId,initialValues }) => [
    {
        type: 'modalform',
        title,
        mode,
        width: 800,
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
            },
        ],
        submit: {
            url: 'http://localhost:8083/sula/modifyUserInfo',
            method: 'POST',
            successMessage: '更新成功',
            convertParams: ({ result }) => result,
        },
        initialValues: {
            ...initialValues,
        },
    }
];