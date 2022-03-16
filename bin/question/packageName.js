export default () => {
    return {
        type: 'input',
        name: 'packageName',
        message: 'set package name',
        validate: val => {
            return val ? true : 'please enter packageName'
        }
    }
}