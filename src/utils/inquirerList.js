let questionList = [
    {
        name: 'templateType',
        message: 'which template type you need to create?',
        type: 'list',
        choices: ['vue-template-pc', 'vue-template-h5']
    },
    {
        name: 'description',
        message: 'please enter a description:'
    },
    {
        name: 'author',
        message: 'please enter a author:'
    },
    {
        name: 'cssExpand',
        message: 'which kind of CSS expansion do you want?',
        type: 'list',
        choices: ['less', 'scss', 'default']
    }
];

let mapActions = {};

module.exports = { questionList };
