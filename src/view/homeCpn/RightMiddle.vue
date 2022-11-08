<template>
    <div class="RightMiddle">
        <el-card  body-style="padding:0">
            <div ref="lineChart" style="min-width: 800px;min-height: 300px;"></div>
        </el-card>
    </div>

</template>

<script>
import getCanvas from "../../js/canvas";

export default {
    name: "RightMiddle",
    mounted(){
        let date=this.$store.state.goods.brandData
        let dom=this.$refs.lineChart
        console.log(dom)
        getCanvas(1,date,dom,[5,6,7,8,9,10])
    }

}
</script>

<style lang="less" scoped>
.RightMiddle{
    /*background-color: bisque;*/
    height: 35vh;
    min-height: 300px;
    width: 98%;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>