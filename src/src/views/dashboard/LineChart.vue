<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import * as echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    chartData: {
  type: Object,
  required: true,
  validator: function (value) {
    return value.hasOwnProperty('chargingPower') && 
           value.hasOwnProperty('chargingCount') && 
           value.hasOwnProperty('orderAmount');
  }
},
    height: {
      type: String,
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
  setOptions({ chargingPower, chargingCount, orderAmount, newData1, newData2 } = {}) {
  this.chart.setOption({
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      boundaryGap: false,
      axisTick: {
        show: false
      }
    },
    grid: {
      left: 10,
      right: 10,
      bottom: 20,
      top: 30,
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      },
      padding: [5, 10]
    },
    yAxis: {
      axisTick: {
        show: false
      }
    },
    legend: {
      data: ['充电电量', '充电次数', '订单金额', '新数据1', '新数据2'] // 更新图例
    },
    series: [
      {
        name: '充电电量',
        itemStyle: {
          normal: {
            color: '#FF005A',
            lineStyle: {
              color: '#FF005A',
              width: 2
            }
          }
        },
        smooth: true,
        type: 'line',
        data: chargingPower,
        animationDuration: 2800,
        animationEasing: 'cubicInOut'
      },
      {
        name: '充电次数',
        smooth: true,
        type: 'line',
        itemStyle: {
          normal: {
            color: '#3888fa',
            lineStyle: {
              color: '#3888fa',
              width: 2
            },
            areaStyle: {
              color: '#f3f8ff'
            }
          }
        },
        data: chargingCount,
        animationDuration: 2800,
        animationEasing: 'quadraticOut'
      },
      {
        name: '订单金额',
        smooth: true,
        type: 'line',
        itemStyle: {
          normal: {
            color: '#00BFFF',
            lineStyle: {
              color: '#00BFFF',
              width: 2
            },
            areaStyle: {
              color: '#e0f7fa'
            }
          }
        },
        data: orderAmount,
        animationDuration: 2800,
        animationEasing: 'quadraticOut'
      },
      {
        name: '新数据1', // 新数据1
        smooth: true,
        type: 'line',
        itemStyle: {
          normal: {
            color: '#FFA500', // 自定义颜色
            lineStyle: {
              color: '#FFA500',
              width: 2
            }
          }
        },
        data: newData1, // 新数据1的数据
        animationDuration: 2800,
        animationEasing: 'quadraticOut'
      },
      {
        name: '新数据2', // 新数据2
        smooth: true,
        type: 'line',
        itemStyle: {
          normal: {
            color: '#8A2BE2', // 自定义颜色
            lineStyle: {
              color: '#8A2BE2',
              width: 2
            }
          }
        },
        data: newData2, // 新数据2的数据
        animationDuration: 2800,
        animationEasing: 'quadraticOut'
      }
    ]
  })
}
  
    }
  }
</script>
