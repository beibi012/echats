<template>
    <div class="TheHome">
        <el-row type="flex">
            <el-col :span="8">
                <div class="HomeLeft">
<!--                    home页面左上角user面板-->
                    <user-card></user-card>
<!--                    home页面左下角table面板-->
                    <left-down></left-down>
                 </div>
                </el-col>
            <el-col :span="16">
                <div class="HomeRight">
                    <right-up></right-up>
                    <right-middle></right-middle>
                    <right-dwon></right-dwon>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import UserCard from "./homeCpn/UserCard";
    import LeftDown from "./homeCpn/LeftDown";
    import RightUp from "./homeCpn/RightUp";
    import RightMiddle from "./homeCpn/RightMiddle";
    import RightDwon from "./homeCpn/RightDwon";
    export default {
        name: "TheBody",
        components:{
            UserCard,
            LeftDown,
            RightUp,
            RightMiddle,
            RightDwon
        },
        data(){
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '518'
            };
            return {
                tableData: Array(20).fill(item)
            }
        }
    }
</script>

<style lang="less" scoped>
    .TheHome{
        height: 100%;
        display: flex;
        justify-content: left;

        .HomeLeft{
            min-width: 200px;
        }
        .HomeRight{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            flex-wrap: nowrap;

        }
    }
</style>