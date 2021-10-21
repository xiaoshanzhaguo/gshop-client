/*
ajax请求函数模块
返回值是: promise对象(异步返回的数据是：response.data，后面用的时候就好用)
 */
export default function ajax (url, data={}, type='GET') {

  return new Promise(function (resolve, reject) {
    //resolve和reject是高阶函数，接收函数的函数

    //执行异步请求
    let promise

    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    //成功调用resolve()
    promise.then(response => {
      resolve(response.data)
    })
      //失败了调用reject()
      .catch(error => {
        reject(error)
      })
  })
}

/*
期望的方式
const response = await ajax()
const result = response.data

const resule = await ajax()
 */

