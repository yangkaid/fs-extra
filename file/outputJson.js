const fs = require("fs-extra");

let path = "./file2/demo2.json";

let obj = {
  name: "yangkai",
  age: "222",
  find: "true",
  ok: 'okkkk',  
  link: 'objsdfcoding'
};

/* 
几乎等同于writeJosn
file 写入文件路径
object 写入文件的JSON对象
options

encoding  |  默认为 'utf8'
mode  默认为 0o666
flag  详见支持的文件系统flag, 默认为 'w'
spaces <number|string> 缩进的空格数; 或者用于缩进的字符串（即传递'\t'标签缩进）
EOL  设置EOL字符。默认是\n。
replacer JSON replacer
*/

/* fs.outputFile(path, obj)
  .then(() => fs.readJSON(path))
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  }); */

async function outputFile(path, obj) {
  try {
    await fs.outputFile(path, JSON.stringify(obj));
    const data = await fs.readJson(path);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

outputFile(path,obj)
