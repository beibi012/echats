<template>
    <div class="RightDown">
        <el-card class="RdCard" body-style="padding:0">
            <div ref="one" style="min-width: 350px;min-height: 270px;">
            </div>
        </el-card>
        <el-card class="RdCard" body-style="padding:0">
            <div ref="two" style="min-width: 350px;min-height: 270px;">
            </div>
        </el-card>
    </div>

</template>

<script>
import * as echarts from'echarts'
import getCanvas from "../../js/canvas";
export default {
    name: "RightDown",
    mounted() {

        let chartOne=this.$refs.one
        let chartTwo=this.$refs.two
        let date=this.$store.state.goods.brandData
        getCanvas(2,date,chartTwo,[5,6,7,8,9,10])
        getCanvas(3,date,chartOne,[8,9,10])
    }
}
</script>

<style lang="less" scoped>
.RightDown{
    max-height: 35vh;
    min-height: 300px;
    width: 98%;
    min-width: 700px;
    margin: 5px 0;
    display: flex;
    justify-content: left;
    align-items: center;

    .RdCard{
        width: 50%;
        height: 100%;
        margin-right: 15px;
        div{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>