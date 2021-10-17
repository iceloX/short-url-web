const URL_REGX = /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/
const SUCCESS_CODE = 200
// 域名配置记得加"/"
const ROOT_URL = "http://127.0.0.1/";
// 后端域名配置 不需要加 "/"
const SERVICE_URL = "http://127.0.0.1:18880"
export default{
    URL_REGX,
    SUCCESS_CODE,
    ROOT_URL,
    SERVICE_URL
}