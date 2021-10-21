/*
包含n个接口的请求函数的模块
函数的返回值：promise对象
 */
import ajax from './ajax'

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax('/position/${geoshash}')
//后面不能直接传{geohash}，因为这样传是query参数，封装到问号后面的，而这里是个param参数，封装到路径里面的

// 2、获取食品分类列表
export const reqFoodTypes = () => ajax('/index_category')

// 3、根据经纬度获取商铺列表
export  const reqShops = (longitude, latitude) => ajax('/shops', {longitude, latitude})
//这里也可以写成 (a, b) => ajax('/shops', {longitude:a, latitude:b})

// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShops = (geohash, keyword) => ajax('/search_shops', {geohash, keyword})

// 5、获取一次性验证码
export const reqCaptchas = () => ajax('/captchas')

// 6、用户名密码登陆
export const accountLogin = (name, pwd, captcha) => ajax('/login_ped', {name, pwd, captcha})

// 7、发送短信验证码
export const moblieCode = phone => ajax('sendcode', {phone})

// 8、手机号验证码登陆
export const phoneLogin = (phone, code) => ajax('/login_sms', {phone, code}, 'POST')

// 9、根据会话获取用户信息
export const reqUser = () => ajax('/userinfo')

// 10、用户登出
export const reqLogout = () => ajax('/logout')

