<template>
  <BaseCard title="标准操作系统进出情况">
    <BaseBarChart
      :options="options"
    />
  </BaseCard>
</template>

<script>
import { ref } from 'vue'
import BaseCard from '@/components/common/BaseCard.vue'
import BaseBarChart from '@/components/common/charts/BaseBarChart.vue'

export default {
  components: {
    BaseCard,
    BaseBarChart
  },
  setup (prop) {
    const xAxisData = ['2001年1月', '2001年2月', '2001年3月', '2001年4月', '2001年5月', '2001年6月', '2001年7月']
    const seriesData = [
      {
        name: '入室(箱)',
        type: 'bar',
        data: [120, 132, 101, 134, 90, 230, 210],
        itemStyle: {
          color: '#F59A23'
        }
      },
      {
        name: '出室(箱)',
        type: 'bar',
        data: [220, 182, 191, 234, 290, 330, 310],
        itemStyle: { color: '#16CEB9' }
      }
    ]

    const options = ref({
      legend: {
        bottom: 5,
        data: seriesData.map(item => item.name)
      },
      xAxis: {
        data: xAxisData
      },
      yAxis: {},
      series: seriesData
    }
    )

    return {
      options
    }
  }
}
</script>
