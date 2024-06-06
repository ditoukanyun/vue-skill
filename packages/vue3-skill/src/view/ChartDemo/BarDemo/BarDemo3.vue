<template>
  <BaseCard title="试块送检情况">
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
    const xAxisData = ['标养抗压纪念馆', '标养抗压期限', '标养-抗压开盘', '标养抗压毒素', '标养抗渗见证', '标养-抗渗污染物', '同条​​件(600℃d)-纪念', '同条​​件(600℃d)-污染', '同条​​件(拆模)-见证', '同条​​件(拆模)-污染']
    const seriesData = [
      {
        name: '总组数',
        type: 'bar',
        data: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300],
        itemStyle: {
          color: '#16CEB9'
        }
      },
      {
        name: '送检组数',
        type: 'bar',
        data: [220, 182, 191, 234, 290, 120, 210, 220, 182, 191],
        itemStyle: { color: '#F59A23' }
      },
      {
        name: '收到报告组数',
        type: 'bar',
        data: [220, 182, 191, 234, 290, 130, 210, 191, 234, 290],
        itemStyle: { color: '#3399FF' }
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
