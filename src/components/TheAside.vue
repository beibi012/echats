<template>
    <div class="TheAside">
        <el-aside class="el-aside" style="width: 200px;">
            <h4>{{$store.state.aside.name}}</h4>
            <el-menu default-active="1"
                     style="border: none;"
                     background-color="#409eff"
                     text-color="#fff"
                     active-text-color="#ffd04b">
                <div v-for="i in asideName">
                    <el-menu-item class="el-menu-text" v-if="i.child[0]==undefined" @click="clickMenu(i)" :key="i.index"  :index="i.index">
                        <i :class="i.icon" style="color: white"></i>
                        <span slot="title">{{i.name}}</span>
                    </el-menu-item>
                </div>
                <div v-for="i in asideName">
                    <el-submenu :index="i.index" :key="i.index" v-if="i.child[0]!==undefined">
                        <template slot="title">
                            <i :class="i.icon" style="color: white"></i>
                            <span>{{i.name}}</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item v-for="e in i.child" @click="clickMenu(e)" :index="e.index" :key="e.index">{{e.name}}</el-menu-item>
                        </el-menu-item-group>
                        </el-submenu>
                    </el-submenu>
                </div>

            </el-menu>

        </el-aside>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "TheAside",
        data() {
            return {
                active:"首页"

            }
        },
        computed: mapState({
            // 箭头函数可使代码更简练
            asideName: state => state.aside.asideName
        }),
        methods:{
            clickMenu(i){
                if(i.name!==this.active){
                    this.$router.push(i.path)
                    this.active=i.name
                    this.$store.commit('setHeaderName',i)
                }

            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="less" scoped>
    @baseColor:#545c64;
    @baseColor2:#409eff;
    .TheAside{
        height: 100vh;
        min-height: 900px;
        min-width: 200px;
        border-right: solid 1px #ccc;
        background-color: @baseColor2;
        overflow: hidden;
        h4{
            color: white;
            width: 200px;
            height: 60px;
            line-height: 60px;
            text-align: center;
            border-bottom: solid 1px #ccc;
            overflow: hidden;
        }
        .el-aside{

            height: 100vh;
            background-color: #409eff;
            .el-menu{
                width: 200px;
                .el-menu-text{


                }
            }
        }
    }


</style>