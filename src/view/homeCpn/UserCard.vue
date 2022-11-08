<template>
    <el-card   class="LeftUp" body-style="padding:0">
        <div slot="header" class="UserIfo">
            <div class="UserCardLfte">
                <img class="UserTx" src="../../../public/tou.jpeg" alt="">
            </div>
            <div class="UserCardRight">
                <h2>Admin</h2>
                <span style="color:#888;">超级管理员</span>
            </div>
        </div>
        <div class="SignIfo">
            <el-row class="row">
                <el-col :span="8">
                        上次登陆时间:
                </el-col>
                <el-col :span="16">
                        2022-10-1
                </el-col>
            </el-row>
            <el-row class="row">
                <el-col :span="8">
                    上次登陆地点:
                </el-col>
                <el-col :span="16">
                    南宁
                </el-col>
            </el-row>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "UserCard"
    }
</script>

<style lang="less" scoped>
.LeftUp{
    height: 30vh;
    min-height: 270px;
    width: 90%;
    min-width: 300px;
    margin: 5px 5%;
    .UserIfo{
        display: flex;
        justify-content: left;
        align-items: center;
        .UserTx{
            border-radius: 50%;
            width: 150px;
            height: 150px;
            border: 1px solid #888;
        }
        .UserCardRight{
            margin-left: 50px;
        }
    }
    .SignIfo{
        font-size: 15px;
        color: #888;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .row{margin-top: 10px;
        }
    }
}
</style>