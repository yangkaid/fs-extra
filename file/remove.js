const fs = require('fs-extra')

// With Promises:
/* fs.remove('/tmp/myfile')
.then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
}) */

// With async/await:
async function example (src, dest) {
  try {
    await fs.remove('./mynewfile.txt')
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

example()