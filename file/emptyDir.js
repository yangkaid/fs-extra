const fs = require('fs-extra')

fs.emptyDir('./test123123')
.then(() => {
    console.log('这个目录是空的');
})
.catch((err) => {
    console.log(err);
})

async function emptyDir() {
    try {
        await emptyDir('./testdemo')
        console.log('这个目录是空的');
    } catch (error) {
        console.log(error);
    }
}