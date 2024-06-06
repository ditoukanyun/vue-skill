<template>
  <v-chart
    class="chart"
    :option="options"
    autoresize
    :style="{ height: height }"
  />
</template>

<script>
import { ref } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import VChart from 'vue-echarts'

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
])

export default {
  components: {
    VChart
  },
  props: {
    height: {
      type: [String, Number],
      default: '300px'
    },
    options: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  setup (prop) {
    const defaultOptions = {
        tooltip: {
          trigger: 'none'
        }
      }

   const options = ref(Object.assign({}, defaultOptions, prop.options));

    return {
      options
    }
  }
}
</script>
