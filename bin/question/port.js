const validatePort = val => {
    if (val === '' || val == null) return false
    if (!isNaN(val) && val >= 1 && val <= 65535) return true
    return false
}
export default () => {
    return {
        type: 'input',
        name: 'port',
        message: 'set port number',
        default: 9000,
        validate: val => {
            return validatePort(val) ? true : '端口号需设置为1～65535间数字'
        }
    }
}