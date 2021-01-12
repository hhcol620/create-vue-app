let questionList = [
  {
    name: 'templateType',
    message: 'which template type you need to create?',
    type: 'list',
    choices: ['vue-template-pc', 'vue-template-h5']
  },
  {
    name: 'Description',
    message: 'please enter a description:'
  },
  {
    name: 'Author',
    message: 'please enter a author:'
  }
]

let mapActions = {}

module.exports = { questionList }
