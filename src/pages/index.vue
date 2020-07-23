<!--
 * @Author: lzy
 * @Date: 2020-07-14 17:28:22
 * @FilePath: \my-init-PC\vue-cli-template-master\src\pages\index.vue
--> 
<template>
  <div>
    <div class="home_chart">
      <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
      <chart class="home_chart--line" ref="chart1" :options="orgOptions" :auto-resize="true"></chart>
    </div>
  </div>
</template>

<script>
import addMixins from "../mixins/addMixin"
export default {
  data () {
    return {
      orgOptions: {},
    }
  },
  mixins: [addMixins],
  mounted() {
    this.drawLine();
    this.orgOptions = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
        }]
    }
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '2020年 XX 服装厂销售情况' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
  }
}
</script>

<style scoped>
.home_chart{
  width: 100%;
  display: flex;
  justify-content:content;
  align-items: content;
}
.home_chart--line{
  width: 300px;
  height: 300px;
}
</style>