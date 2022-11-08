<template>
    <div class="TheBody">
        <router-view>
            <router-link :to="{ name: 'home' }"></router-link>
            <router-link :to="{ name: 'goods' }"></router-link>
            <router-link :to="{ name: 'user' }"></router-link>
            <router-link :to="{ name: 'option1' }"></router-link>
            <router-link :to="{ name: 'option2' }"></router-link>
        </router-view>
    </div>
</template>

<script>
    export default {
        name: "TheBody",
        data(){
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        }
    }
</script>

<style lang='less' scoped>
.TheBody{
    /*background-color: #42b983;*/
    width: 100%;
    height: 100%;
}
</style>