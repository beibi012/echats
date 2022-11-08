<template>
    <div class="TheHeader">
        <el-header class="el-header">
            <div class="headerLeft">
                <el-button class="headerBtn" size="mini" icon="el-icon-menu"></el-button>
                <span class="headerSpan" style="color:white">{{$store.state.header.name}}</span>
            </div>
            <el-dropdown class="headerRight" trigger="click">
                <img class="userTx" src="../../public/tou.jpeg" alt="">
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>
    </div>
</template>

<script>
    import store from "../store/store";
    export default {
        name: "TheHeader"
    }
</script>

<style lang="less" scoped>
.TheHeader{
    height: 60px;
    width: 100%;
    background-color: #409eff;
    .el-header{
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .headerLeft{
            display: flex;
            align-items: center;
            .headerBtn{
                /*padding: 10px 20px;*/
            }
            .headerSpan{
                margin-left: 20px;
            }
        }
        .headerRight{
            display: flex;
            align-items: center;
            .userTx{
                width: 45px;
                height: 45px;
                border: 2px solid white;
                border-radius: 50%;
            }
        }

    }
}
</style>