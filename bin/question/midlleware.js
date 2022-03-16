export default () => {
    return {
        type: 'checkbox',
        name: 'middleware',
        message: 'please choose middleware',
        choices: [
            {
                name: 'static',
            },
            {
                name: 'cors',
            }
        ]
    }
}