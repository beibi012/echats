
let randomData=function () {
    let brand=["苹果","小米","华为","三星","oppo"]
    let brandData=[]

//生成随机数据
    for(let i in brand){

        let total=0
        let today=Math.floor(Math.random()*1000)
        let lasttoday=Math.floor(Math.random()*1000)
        let mon=new Date().getMonth()
        let lastmon=Math.floor(Math.random()*10000)
        let lasttotal=lastmon*12
        let halfData=[]
        let halfTotal=0

        brandData.push({brandName:brand[i]})
        brandData[i].today=today
        brandData[i].lasttoday=lasttoday
        brandData[i].lastmon=lastmon
        brandData[i].lasttotal=lasttotal
        // brandData[i].mon=mon
        brandData[i].headArr=[]
        brandData[i].monthData=[{}]
        for(let j=1 ;j<=12;j++){
            brandData[i].headArr[j-1]={label:j+'月',prop:'month'+j}
            let key='month'+j
            let val=Math.floor(Math.random()*10000)
            brandData[i].monthData[0][key]=val
            total+=val
            if(mon-j<6&&mon-j>=0){
                halfData.push(val)
                halfTotal+=val
            }
        }
        brandData[i].total=total
        brandData[i].mon=brandData[i].monthData[0]['month'+mon]
        brandData[i].halfData=halfData
        brandData[i].halfTotal=halfTotal
    }

    //算出近半年数据


    // brandData.forEach((e,index)=>{
    //     let brand=[]
    //     for(let i=6;i>0;i--){
    //         let mon=new Date().getMonth()-i+2
    //
    //         brand.push(e.monthData[0]['month'+mon])
    //     }
    //     halfData.push({data:brand,name:e.brandName,type: 'line'})
    //     e.halfData=halfData
    // })
    console.log(brandData)

    return brandData
}
// brandData=randomData()
export default randomData