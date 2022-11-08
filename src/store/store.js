import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const moduleAside={
    state:() =>({
        name:"后台管理系统",
        asideName:[
            {
                name:"首页",
                index:"1",
                path:"/",
                icon:"el-icon-s-home",
                child:[],
                remark:""
            },
            {
                name:"商品详情",
                index:"2",
                path:"/goods",
                icon:"el-icon-goods",
                child:[],
                remark:""
            },
            {
                name:"用户管理",
                index:"3",
                path:"/user",
                icon:"el-icon-user",
                child:[],
                remark:""
            },
            {
                name:"其他",
                index:"4",
                path:"",
                icon:"el-icon-more-outline",
                child:[
                    {
                        name:"选项一",
                        index:"4-1",
                        path:"/option1",
                        icon:"",
                        child:{},
                        remark:""
                    },
                    {
                        name:"选项二",
                        index:"4-2",
                        path:"/option2",
                        icon:"",
                        child:{},
                        remark:""
                    },
                ],
                remark:""
            },
        ]
    }),
    mutations: { },
    actions: {},
    getters: {  }
}
const moduleHeader = {
    state: () => ({
        name:"首页"
    }),
    mutations: {
        setHeaderName(state,i){
            console.log(state,i)
            state.name=i.name
        }
    },
    actions: {
        // setHeaderName ({ commit }) {
        //     commit('setHeaderName')
        // }
    },
    getters: {  }
}

const moduleGoods = {
    state: () => ({
        name:"body data",
        brandData:'',
        monthData:'',
        monthArr:'',
        homeData:{
            today:0,mon:0,total:0,lasttoday:0,lastmon:0,lasttotal:0
        }
    }),
    mutations: {  },
    actions: {  }
}

const moduleHome = {
    state: () => ({
        name:"home data",
        trading:[
            {
                name:"今日订单",
                index:"1",
                price:11,
                color:"#67C23A",
                icon:"el-icon-circle-check",
                child:[],
                remark:""
            },
            {
                name:"本月订单",
                index:"2",
                price:122,
                color:"#F2B80B",
                icon:"el-icon-star-off",
                child:[],
                remark:""
            },{
                name:"今年订单",
                index:"3",
                price:131,
                color:"#409EFF",
                icon:"el-icon-goods",
                child:[],
                remark:""
            },{
                name:"上月日平均订单",
                index:"4",
                price:411,
                color:"#67C23A",
                icon:"el-icon-circle-check",
                child:[],
                remark:""
            },{
                name:"上月订单",
                index:"5",
                price:6711,
                color:"#F2B80B",
                icon:"el-icon-star-off",
                child:[],
                remark:""
            },{
                name:"去年订单",
                index:"6",
                price:1881,
                color:"#409EFF",
                icon:"el-icon-goods",
                child:[],
                remark:""
            },
        ]
    }),
    mutations: {  },
    actions: {  }
}

const store = new Vuex.Store({
    modules: {
        aside: moduleAside,
        header: moduleHeader,
        goods:moduleGoods,
        home:moduleHome
    }
})
export default store