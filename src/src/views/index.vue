<template>
  <div>
    <div class="info-container">
      <div class="info-box" style="background-color: #f8d7da;">
      充电电量（度）
      <p>93822</p>
      </div>
      <div class="info-box" style="background-color: #d1ecf1;">
      充电次数（单）
      <p>1736</p>
      </div>
      <div class="info-box" style="background-color: #d4edda;">
      订单应收金额（元）
      <p>65320</p>
      </div>
      <div class="info-box" style="background-color: #fff3cd;">
      
      订单应收电费（元）
      <p>345620</p>
      </div>
      
      <div class="info-box" style="background-color: #cce5ff;">
      订单应收服务费（元）
      <p>3422</p>
      </div>
    </div>
    <div class="chart-container">
      <LineChart :chartData="chartData" />
      <PieChart className="custom-pie-chart" />
    </div>
    <List class='listData'/>
    <Log class='log'/>
  </div>
</template>

<style scoped>

.info-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px; 
   margin-top:40px;
}

.info-box {
  height:100px;
  flex: 1; 
  margin: 0 10px; 
  padding: 20px;
  text-align: center; 
  border-radius: 5px; 
  color: #333; 
}

.chart-container {
  display: flex; 
  justify-content: space-between; 
  align-items: stretch; 
  margin-top: 50px;
}

.custom-pie-chart {
  margin-left: 20px; 
}
</style>

<script>
import LineChart from './dashboard/LineChart.vue'
import PieChart from './dashboard/PieChart.vue'
import List from './monitor/cache/list.vue'
import Log from  './monitor/job/log.vue'

export default {
  components: {
    Log,
    LineChart,
    PieChart
  },
 data() {
  return {
    chartData: {
      chargingPower: [820, 932, 710, 934, 1290, 1030, 1320], // 更分散的充电电量
      chargingCount: [620, 730, 650, 800, 1090, 930, 1120], // 更分散的充电次数
      orderAmount: [620, 700, 650, 800, 950, 1100, 1200], // 更分散的订单金额
      newData1: [100, 250, 300, 400, 450, 600, 700], // 更分散的新数据1
      newData2: [50, 120, 220, 350, 470, 550, 600]   // 更分散的新数据2
    }
  }
}
}
</script>