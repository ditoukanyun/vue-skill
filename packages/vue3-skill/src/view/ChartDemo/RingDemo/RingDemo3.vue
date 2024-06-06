<template>
  <BaseCard title="试块种类">
    <BaseRingGraph
      :options="options"
    />
  </BaseCard>
</template>

<script>
import { ref } from 'vue'
import BaseCard from '@/components/common/BaseCard.vue'
import BaseRingGraph from '@/components/common/charts/BaseRingGraph.vue'

export default {
  components: {
    BaseRingGraph,
    BaseCard
  },
  setup (prop) {
    const data = [
      {
        value: 333,
        name: '砂浆',
        itemStyle: {
          color: '#F59A23' // 设置柱子颜色
        }
      },
      {
        value: 433,
        name: '混凝土',
        itemStyle: { color: '#16CEB9' }
      }
    ]
    const total = data.reduce((pre, nex) => pre + nex.value, 0)

    const options = ref({
      legend: {
        orient: 'vertical',
        x: 'right',
        data: data.map(item => { return { name: item.name } }),
        formatter: function (name) {
          const cur = data.find((item) => {
            return item.name === name
          })
          return `${name} ${cur ? cur.value : ''}`
        }
      },
      label: {
        formatter: function (params) {
          return `${params.name}: ${(params.value / total * 100).toFixed(2)}%`
        }
        // 其他的 label 配置项 ...
      },

      series: [
        {
          type: 'pie',
          radius: ['50%', '70%'],
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold'
            }
          },
          data: data
        }
      ]
    }
    )
    return {
      options
    }
  }
}
</script>
