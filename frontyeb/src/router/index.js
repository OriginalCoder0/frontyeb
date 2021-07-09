import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from "../views/Home";
import FriendChat from "../views/chat/FriendChat";
import AdminInfo from "../views/AdminInfo";



// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        hidden:true
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children:[
            {
                path: '/chat',
                name: '在线聊天',
                component: FriendChat,
            },
            {
                path: '/userinfo',
                name: '个人中心',
                component: AdminInfo,
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
