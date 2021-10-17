// 导入自己需要的组件
import {  Form,FormItem,Input, Button,Alert,MessageBox,Notification } from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Button)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    Vue.use(Alert)
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$notify = Notification;
  }
}
export default element