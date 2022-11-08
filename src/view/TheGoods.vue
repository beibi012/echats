<template>
    <div>
        <el-card :body-style="{ padding: '10px' }">

            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="商品详情" name="first">
                    <el-table
                            class="GoodTable"
                            :data="tableData"
                            stripe
                            :row-style="{height: '40px',padding:'5px'}"
                            :cell-style="{height: '40px',padding:'5px'}"
                            style="width: 100%;padding: 5px"
                    >
                        <el-table-column
                                type="index"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="brandName"
                                label="品牌"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="today"
                                label="今日购买"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="mon"
                                label="本月购买"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="total"
                                label="总购买"
                        >
                        </el-table-column>
                        <el-table-column label="操作" >
                            <el-popover
                                    slot-scope="scope"
                                    placement="top"
                                    width="960"
                                    trigger="click">

                                <el-table :data="tableData[scope.$index].monthData">
                                    <el-table-column v-for="(i,index) in headArr" :key="index" width="80" :property="i.prop" :label="i.lable"></el-table-column>
                                </el-table>

                                <el-button slot="reference">详情</el-button>


                            </el-popover>
                        </el-table-column>
                    </el-table>

                </el-tab-pane>
                <el-tab-pane label="数据绘图" name="second">
                    <div class="GoodHead">
                       <div class="left">
                           <div class="radio">
                               <el-radio v-model="radio" label="1">折线图</el-radio>
                               <el-radio v-model="radio" label="2">扇形图</el-radio>
                               <el-radio v-model="radio" label="3">柱状图</el-radio>
                           </div>
                           <div class="checkbox">
                               <el-checkbox :indeterminate="checked" v-model="checkAll" @change="clickAll" >全选</el-checkbox>
                               <el-checkbox-group v-model="checkList" @change="checkedMonthChange">
                                   <el-checkbox v-for="num in chooseAll" :label="num" :key="num">{{num}}月</el-checkbox>
                               </el-checkbox-group>
                           </div>
                       </div>
                        <div>
                            <el-button @click="setCharts" type="primary">制图</el-button>
                            <el-button @click="clickClier" type="primary">清空</el-button>
                        </div>
                    </div>
                    <div class="theChart" ref="theChart" style="min-width: 800px;min-height: 500px;">

                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-card>

    </div>

</template>

<script>
    import * as echarts from'echarts'
    import getCanvas from "../js/canvas";
    const monthALL = [1,2,3,4,5,6,7,8,9,10,11,12];
    export default {
        name: "TheGoods",
        data(){

            const item = {
                date: '2016-05-02',
                name: '苹果',
                today:123,
                month:3988,
                total: 50000
            };

            return {
                tableData: [],
                checked:false,
                checkAll: false,
                drawer: false,
                radio: '1',
                activeName:"second",
                checkList:[],
                chooseAll:monthALL,
                min:1,
                chartsData:[],
                dom:"",
                clear:true,
                headArr:[
                    {prop:"month1",lable:"1月"},
                    {prop:"month2",lable:"2月"},
                    {prop:"month3",lable:"3月"},
                    {prop:"month4",lable:"4月"},
                    {prop:"month5",lable:"5月"},
                    {prop:"month6",lable:"6月"},
                    {prop:"month7",lable:"7月"},
                    {prop:"month8",lable:"8月"},
                    {prop:"month9",lable:"9月"},
                    {prop:"month10",lable:"10月"},
                    {prop:"month11",lable:"11月"},
                    {prop:"month12",lable:"12月"},

                ]

            }
        },
        mounted() {
            this.tableData=this.$store.state.goods.brandData
            this.chartsData=this.tableData
            this.dom=this.$refs.theChart




        },
        methods:{
            handleClick(){


            },
            setCharts(){
                echarts.init(this.dom).dispose();
                this.checkList.sort(function(a,b){return a-b})
                getCanvas(this.radio,this.chartsData,this.dom,this.checkList)
            },
            clickClier(){
                echarts.init(this.dom).dispose();
            },
            clickAll(val){
                console.log(val)
                this.checkList = val ? monthALL : [];
                console.log(this.checkList)
                this.checked = false;
            },
            checkedMonthChange(value){
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.chooseAll.length;
                this.checked = checkedCount > 0 && checkedCount < this.chooseAll.length;
            }
        }
    }
</script>

<style lang="less" scoped>

    .GoodHead{
        display: flex;
        justify-content:space-between;
        align-items: center;
        padding: 5px;
        max-height: 80px;
        border-bottom:solid 1px #eee;
        .left{
           .radio{

           }
            .checkbox{
                el-checkbox{

                }
            }
        }
    }
    .GoodTable{
        padding: 0;
    }
    .Page{
        display: flex;
        justify-content: right;
        font-size: 18px;
    }
    .theChart{
        width: 100%;
        height: 100%;
    }
</style>