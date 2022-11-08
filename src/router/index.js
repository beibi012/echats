import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHome from "@/view/TheHome";
import TheGoods from "@/view/TheGoods";
import TheUser from "@/view/TheUser";
import OptionOne from "@/view/OptionOne";
import OptionTwo from "@/view/OptionTwo";

Vue.use(VueRouter);

const routes = [
    { path: '/',name:'home', component: TheHome },
    { path: '/goods', name:'goods',component: TheGoods },
    { path: '/user', name:'user',component: TheUser },
    { path: '/option1', name:'option1',component: OptionOne },
    { path: '/option2', name:'option2',component: OptionTwo }
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
export default router