
export default (answer) => {
    function hasMiddleware(name) {
        return answer.middleware.includes(name)
    }
    const config = {
        packageName: answer.packageName,
        port: answer.port,
        middleware: {
            static: hasMiddleware('static'),
            cors: hasMiddleware('cors')
        }
    }
    return config
}