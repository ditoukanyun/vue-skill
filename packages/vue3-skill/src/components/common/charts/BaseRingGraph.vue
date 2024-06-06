<template>
  <v-chart
    class="chart"
    :option="options"
    autoresize
    :style="{ height: height }"
  />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import { ref } from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  components: {
    VChart,
  },
  props: {
    height: {
      type: [String, Number],
      default: "300px",
    },
    options: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  setup(prop) {
    const defaultOptions = {};

    const options = ref(Object.assign({}, defaultOptions, prop.options));
    return {
      options,
    };
  },
};
</script>
