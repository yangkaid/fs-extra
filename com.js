const { program } = require('commander')
//运行命令 node com -d debug -s small -p vegetarian
// options的两个字符串参数，第一个，前面是具体的命令，后面是这个变量的key，如果没有<>就表示这个变量是Boolean类型的，加上尖括号表示-s后边的变量的值
//第三个参数是默认值
//--pizza-type <type> 会转换成驼峰的命名方式 -no-type 会对Boolean进行一个取反
program.version('1.0.0', '-v --version')
program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small <small>', 'small pizza size', 'big')
  .option('-p, --pizza-type <type>', 'flavour of pizza');
//解析命令
console.log(program.parse(process.argv));
//解析后的选项可以通过Command对象上的.opts()方法获取
const options = program.opts();
console.log(options);
if (options.debug) console.log(options);
console.log('pizza details:');
if (options.small) console.log(`- ${options.small}`);
if (options.pizzaType) console.log(`- ${options.pizzaType}`);