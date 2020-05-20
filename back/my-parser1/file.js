const vk = require('./app')


let response;
vk('https://vk.com/js_by_vladilen').then(res => {
  return response = res
})
async function foo(res){
  await console.log(res)
}

foo(response)
