const URL_REGX = /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/
const SUCCESS_CODE = 200
// 域名配置记得加"/"
const ROOT_URL = "https://u.wayok.cn/";
// 后端域名配置 不需要加 "/"
const SERVICE_URL = "https://u-service.wayok.cn"
export default{
    URL_REGX,
    SUCCESS_CODE,
    ROOT_URL,
    SERVICE_URL
}