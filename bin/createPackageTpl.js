import render from 'json-templater/string.js'
export default config => {
  const tpl = `
    {
        "name": "{{packageName}}",
        "version": "1.0.0",
        "description": "express serve",
        "main": "index.js",
        "scripts": {
          "start": "nodemon ./index.js"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "dependencies": {
          "express": "^4.17.3"
        },
        "devDependencies": {
          {{cors}}
          "nodemon": "^2.0.15"
        }
      }      
      `
  const result = render(tpl, {
    cors: config.middleware.cors ? `"cors": "^2.8.5",` : '',
    packageName: config.packageName
  })
  return result
}