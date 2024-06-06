<template>
  <BaseCard title="每日试块抽样趋势">
    <BaseLineChart
      :options="options"
    />
  </BaseCard>
</template>

<script>
import { ref } from 'vue'
import BaseCard from '@/components/common/BaseCard.vue'
import BaseLineChart from '@/components/common/charts/BaseLineChart.vue'

export default {
  components: {
    BaseLineChart,
    BaseCard
  },
  setup (prop) {
    const xAxisData = ['1月3日', '1月4日', '1月5日', '1月6日', '1月7日', '1月8日', '1月9日']
    const seriesData = [
      {
        name: '标准作业',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210],
        itemStyle: {
          color: '#F59A23'
        },
        symbol: 'none'
      },
      {
        name: '同条​​件贸易',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310],
        itemStyle: { color: '#16CEB9' },
        symbol: 'none'
      }
    ]

    const options = ref({
      tooltip: {
        trigger: 'none'
      },
      legend: {
        data: seriesData.map(item => item.name)
      },
      grid: {
        containLabel: false
      },

      xAxis: {
        boundaryGap: true,
        data: xAxisData
      },
      yAxis: {
        type: 'value',
        name: '组数'
      },
      series: seriesData
    }
    )

    return {
      options
    }
  }
}
</script>
