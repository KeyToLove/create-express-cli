#!/usr/bin/env node
import fs from 'fs'
import { execa, execaCommand } from 'execa'
import prettier from 'prettier'
import chalk from 'chalk'
import createIndexTpl from './createIndexTpl.js'
import createPackageTpl from './createPackageTpl.js'
import initConfig from './initConfig.js';
import question from "./question/index.js";
import path from 'path'
const answer = await question()
const config = initConfig(answer)
const log = console.log
function getRootPath() {
    return `./${config.packageName}`
}
// 创建文件夹
fs.mkdirSync(getRootPath())
// 创建入口文件
fs.writeFileSync(`${getRootPath()}/index.js`, prettier.format(createIndexTpl(config), { parser: 'babel' }))

// 创建package.json
fs.writeFileSync(`${getRootPath()}/package.json`, prettier.format(createPackageTpl(config), { parser: 'json' }))

// 安装依赖
try {
    log(chalk.blue('开始安装依赖，请稍等~'))
    await execaCommand('yarn || npm i', {
        cwd: getRootPath(),
        stdio: [2, 2, 2],
        shell: true
    })
    log('\n' + chalk.cyan('初始化成功！'))
    log('\n' + chalk.blue('请按照以下方式启动服务'))
    log('\n进入工程目录:' + chalk.green(` cd ${getRootPath()}`))
    log('\n启动服务:' + chalk.green(` yarn start || npm start`))
} catch (error) {
    log(chalk.redBright('安装依赖失败，请重试'))
    await execaCommand(`rm -rf ${getRootPath()}`, {
        cwd: path.cwd,
    })
}