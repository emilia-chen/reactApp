import React, { Component } from 'react';
//不是按需加载的话文件太大
//import echarts from 'echarts'
//下面是按需加载
import echarts from 'echarts/lib/echarts'
//导入折线图
import 'echarts/lib/chart/line';  //折线图是line,饼图改为pie,柱形图改为bar
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import request from './utils/request';

class EchartsDemo extends Component {
 componentDidMount() {
   let dataMap;
   let xData=[];
   let yData=[];
   // 基于准备好的dom，初始化echarts实例
   let myChart = echarts.init(document.getElementById('main'));
   request('https://suggest.taobao.com/sug?code=utf-8&q=%E4%B9%A6%E6%9C%AC').then(res=>{
       if(res&&res.data){
       console.log('response',res)
       dataMap=new Map(res.data.result)
       console.log('dataMap',dataMap)
       for (var d of dataMap) {
         xData.push(d[0])
         yData.push(d[1])
        }
        console.log('xData',xData)
        console.log('yData',yData)
        // 绘制图表
        myChart.setOption({
            title: { text: 'ECharts' },
            tooltip: {},
            grid: {    //位置
            left: '0',
            width:'100%',
            containLabel: true
          },
            xAxis: {
                type: 'category',
                data: xData,
                axisLabel : {//坐标轴刻度标签的相关设置。
                interval:0,
                rotate:"45"
                }
            },
            yAxis: {
               type: 'value'
            },
            series: [{
                type: 'line',
                data: yData
            }]
        });
     }
    })
   
    }
  render() {
    return (
     <div id="main" style={{ top:50,width: 400, height: 400 ,margin :'auto'}}></div>
    );
  }
}

export default EchartsDemo;




