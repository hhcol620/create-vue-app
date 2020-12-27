let questionList = [
  {
    name: 'templateType',
    message: 'which template type you need to create?',
    type: 'list',
    choices: ['PC', 'H5']
  },
  {
    name: 'description',
    message: 'please enter a description:'
  },
  {
    name: 'author',
    message: 'please enter a author:'
  }
]

let answerList = {}

module.exports = { questionList }
