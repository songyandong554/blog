//该文件用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from "../pages/About"
import Home from "../pages/Home"
import AddArtivle from "../pages/AddArtivle"

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/About",
            component: About,
        },
        {
            path: "/Home",
            component: Home,
        },

        {
            path: "/AddArtivle",
            component: AddArtivle
        }
    ],
});