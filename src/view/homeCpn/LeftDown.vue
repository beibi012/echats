<template>
    <el-card class="LfetDown" body-style="padding:0;min-height:550px;">
        <div >
            <el-table
                    class="Table"
                    :data="tableData"
                    stripe
                    max-height="550"
                    style="width: 100%"
            >
                <el-table-column
                        prop="brandName"
                        label="品牌">
                </el-table-column>
                <el-table-column
                        prop="today"
                        label="今日购买">
                </el-table-column>
                <el-table-column
                        prop="mon"
                        label="本月购买">
                </el-table-column>
                <el-table-column
                        prop="halfTotal"
                        label="半年销量">
                </el-table-column>
            </el-table>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "LeftDown",
        data(){

            return {
                tableData: [],
                input:""
            }
        },
        mounted() {
            this.tableData=this.$store.state.goods.brandData
        }
    }
</script>

<style lang="less" scoped>
    .LfetDown{
        height: 55vh;
        min-height: 550px;
        width: 90%;
        margin: 5px 5%;
        .Table{

        }
    }
</style>