import inquirer from "inquirer";
import midlleware from "./midlleware.js";
import packageName from "./packageName.js";
import port from "./port.js";
export default () => {
    // 处理输入
    return inquirer.prompt([packageName(), port(), midlleware()]);
}