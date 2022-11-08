<template>
    <div class="RightUp">
        <el-card class="DealCont" body-style="padding:0;display:flex;">
                <i class="el-icon-circle-check DealIcon" style="color: white;background-color: #67C23A" ></i>
                <div class="DealText">
                    <h2>¥{{today}}</h2>
                    <p>今日订单</p>
                </div>
        </el-card>
        <el-card class="DealCont" body-style="padding:0;display:flex;">
            <i class="el-icon-star-off DealIcon" style="color: white;background-color: #F2B80B" ></i>
            <div class="DealText">
                <h2>¥{{mon}}</h2>
                <p>本月订单</p>
            </div>
        </el-card>
        <el-card class="DealCont" body-style="padding:0;display:flex;">
            <i class="el-icon-goods DealIcon" style="color: white;background-color: #409EFF" ></i>
            <div class="DealText">
                <h2>¥{{total}}</h2>
                <p>今年订单</p>
            </div>
        </el-card>
        <el-card class="DealCont" body-style="padding:0;display:flex;">
            <i class="el-icon-circle-check DealIcon" style="color: white;background-color: #67C23A" ></i>
            <div class="DealText">
                <h2>¥{{lasttoday}}</h2>
                <p>上月本日订单</p>
            </div>
        </el-card>
        <el-card class="DealCont" body-style="padding:0;display:flex;">
            <i class="el-icon-star-off DealIcon" style="color: white;background-color: #F2B80B" ></i>
            <div class="DealText">
                <h2>¥{{lastmon}}</h2>
                <p>上月订单</p>
            </div>
        </el-card>
        <el-card class="DealCont" body-style="padding:0;display:flex;">
            <i class="el-icon-goods DealIcon" style="color: white;background-color: #409EFF" ></i>
            <div class="DealText">
                <h2>¥{{lasttotal}}</h2>
                <p>去年订单</p>
            </div>
        </el-card>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "RightUp",
        data(){

            return{
                tableData:"",
                today:0,mon:0,total:0,lasttoday:0,lastmon:0,lasttotal:0
            }
        },
        computed: mapState({
            // 箭头函数可使代码更简练
            trading: state => state.home.trading
        }),
        mounted() {
            // let today=0,mon=0,total=0,lasttoday=0,lastmon=0,lasttotal=0
            let date=this.$store.state.goods.brandData
            for(let i in date){
                this.today+=date[i].today
                this. mon+=date[i].mon
                this.total+=date[i].total
                this.lasttoday+=date[i].lasttoday
                this.lastmon+=date[i].lastmon
                this.lasttotal+=date[i].lasttotal
            }
            // console.log(today,mon,total,lasttoday,lastmon,lasttotal)
        }
    }
</script>

<style lang="less" scoped>
    .RightUp{
        /*background-color: #42b983;*/
        min-width: 800px;
        height: 20vh;
        min-height: 200px;
        width: 98%;
        margin: 5px 0;
        display: flex;
        justify-content: left;
        align-items: center;
        flex-wrap: wrap;

        .DealCont{
            width: 30%;
            min-width: 240px;
            display: flex;
            justify-content: left;
            align-items: center;
            margin-right: 15px;
            .DealIcon{
                width: 80px;
                height: 80px;
                line-height: 80px;
                text-align: center;
                background-color: #409eff;
            }
            .DealText{
                margin-left: 15px;
                p{
                    color: #888;
                    font-size: 12px;
                }
            }
        }
    }
</style>