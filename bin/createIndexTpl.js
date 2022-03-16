import render from 'json-templater/string.js'
import fs from 'fs'
export default config => {
    const tpl = `const express = require('express')
const app = express()
{{static}}
// 处理body
app.use(express.json())
{{cors}}
// 测试请求
app.get('/', (req, res, next) => {
res.send('Hello Express')
})
app.listen({{port}}, () => {
    console.log('serve is running at http://localhost:{{port}}');
})`
    const corsStr = `// 处理跨域
app.use(require('cors')())
`
    const staticStr = `// 静态资源服务
const path = require('path')
app.use('', express.static(path.resolve(__dirname, './public')))
`
    const result = render(tpl, {
        static: config.middleware.static ? staticStr : '',
        cors: config.middleware.cors ? corsStr : '',
        port: config.port
    })
    if (config.middleware.static) {
        fs.mkdirSync(`${config.packageName}/public`)
    }
    return result
}