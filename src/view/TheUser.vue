<template>
    <div>
        <el-card :body-style="{ padding: '10px' }">
            <div class="UserHead">
                <div>
                    <el-button type="primary">新增</el-button>
                </div>
                <div>
                    <el-input v-model="input" placeholder="请输入内容" style="width: 180px;"></el-input>
                    <el-button type="primary">搜索</el-button>
                </div>

            </div>
            <div >
                <el-table
                        class="UserTable"
                        :data="tableData"
                        stripe
                        :row-style="{height: '40px',padding:'5px'}"
                        :cell-style="{height: '40px',padding:'5px'}"
                        style="width: 100%;padding: 5px"
                        >
                    <el-table-column
                            prop="date"
                            label="日期"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="姓名"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="地址">
                    </el-table-column>
                    <el-table-column label="操作">
                        <el-button>编辑</el-button>
                        <el-button type="danger">删除</el-button>
                    </el-table-column>
                </el-table>
                <div class="Page">
                    <el-pagination
                            prev-text="上一页"
                            next-text="下一页"
                            layout="prev, pager, next"
                            :total="50">
                    </el-pagination>
                </div>
            </div>
        </el-card>
    </div>

</template>

<script>
    export default {
        name: "TheUser",
        data(){

            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(10).fill(item),
                input:""
            }
        }
    }
</script>

<style lang="less" scoped>

.UserHead{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    max-height: 60px;
    border-bottom:solid 1px #eee;
}
.UserTable{
    padding: 0;
}
.Page{
    display: flex;
    justify-content: right;
    font-size: 18px;
}
</style>