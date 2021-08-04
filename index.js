const chalk = require('chalk')
const boxen = require('boxen')
const inquirer = require('inquirer')

console.log(chalk.red.strikethrough.bgGreen('Hello World'));
console.log(boxen('yangkai', {
    padding: 4,
    margin: 2,
    borderStyle: 'bold'
}));

inquirer.prompt([
    // {
    //     type: 'input',
    //     message: '请输入你的名字',
    //     name: 'name',
    //     default: '杨凯',
    // },
    // {
    //     type: 'input',
    //     name: 'age',
    //     default: 18,
    //     // validate: (val) => {
    //     //     if (val > 0 && val < 120) {
    //     //         return val
    //     //     } else {
    //     //         return "年龄错误"
    //     //     }
    //     // }
    // },
    {
        type: 'list',
        message: '请选择一个选项',
        name: 'fruit',
        suffix: '%%%',
        choices: ['apple','pear','banner'],
        filter: (val) => {
            return val.toUpperCase()
        }
    }
]).then( answer => {
    console.log(answer);
})

// inquirer.prompt([
//     {
//         type: 'checkbox',
//         message: '选择一个颜色',
//         name: 'color',
//         choices: ['red','black','pink','orange']
//     }
// ]).then( answer => {
//     console.log(answer);
// })
