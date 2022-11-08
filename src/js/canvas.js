import * as echarts from'echarts'


var getCanvas=function (echaetsType,brandData,dom,chooseMonth) {
    const  echarts1=echarts.init(dom)
    let canvas
    let xAxis=[]
    let title=""
    if(echaetsType==1){
        let lineData=[]
        brandData.forEach((e)=>{
            let chooseData=[]
            chooseMonth.forEach((val)=>{
                let key='month'+val
                chooseData.push(e.monthData[0][key])


            })
            lineData.push({
                data:chooseData,
                name:e.brandName,
                type: 'line'
            })
        })

        chooseMonth.forEach((e)=>{
            xAxis.push(e+"月")
            title+=e.toString()+"、"
        })
        title=title.slice(0,title.length-1)+"月折线图"
        canvas=echarts1.setOption({
            title: {
                text: title,
                left:'left'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                right:20,
                orient: 'vertical',
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                data: xAxis
            },
            yAxis: {
                type: 'value'
            },
            series: lineData
        });
    }
    if(echaetsType==2){
        let pieData=[]
        let title=""
        brandData.forEach((e)=>{
            let total=0
                chooseMonth.forEach((val)=>{
                let key='month'+val
                total+=e.monthData[0][key]
            })
            pieData.push({
                value:total,
                name:e.brandName
            })
        })
        chooseMonth.forEach((e)=>{
            xAxis.push(e+"月")
            title+=e.toString()+"、"
        })
        title=title.slice(0,title.length-1)+"月扇形图"
        canvas=echarts1.setOption({
            title: {
                text: title,
                left: 'left'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'right'
            },
            series: [
                {
                    name: '销量',
                    type: 'pie',
                    radius: '50%',
                    data: pieData,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        })
    }

    if(echaetsType==3){
        let barData=[]
        brandData.forEach((e)=>{
            let chooseData=[]
            chooseMonth.forEach((val)=>{
                let key='month'+val
                chooseData.push(e.monthData[0][key])
            })
            barData.push({
                data:chooseData,
                name:e.brandName,
                type: 'bar'
            })
        })

        chooseMonth.forEach((e)=>{
            xAxis.push(e+"月")
            title+=e.toString()+"、"
        })
        title=title.slice(0,title.length-1)+"月折柱状图"

        canvas=echarts1.setOption({
            title: {
                text: title,
                left: 'left'
            },
            xAxis: {
                type: 'category',
                data: xAxis
            },
            yAxis: {
                type: 'value'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                orient: 'vertical',
                left: 'right'
            },
            series: barData
        })
    }

return canvas
}
export default getCanvas