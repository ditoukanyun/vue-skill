<template>
  <v-chart
    class="chart"
    :option="options"
    autoresize
    :style="{ height: height }"
  />
</template>

<script>
import { ref } from "vue";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  DataZoomComponent,
  CanvasRenderer,
  BarChart,
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
    const defaultOptions = {
      // 滚动条
      dataZoom: [
        {
          type: "slider",
          realtime: true,
          startValue: 0,
          endValue: 5,
          height: 10,
          brushSelect: false, // 是否开启鼠标手动选择显示条数
          fillerColor: "#C0E1FF", // 滚动条颜色
          backgroundColor: "#F2F2F2",
          handleSize: 0, // 两边手柄尺寸
          showDetail: false, // 拖拽时是否展示滚动条两侧的文字
          bottom: "10%",
          borderRadius: 5,
          moveHandleStyle: {
            color: "#C0E1FF",
          },
        },
        {
          type: "inside", // 支持内部鼠标滚动平移
          startValue: 0,
          endValue: 5,
          height: 0,
          borderRadius: 5,
          zoomOnMouseWheel: false, // 关闭滚轮缩放
          moveOnMouseWheel: true, // 开启滚轮平移
          moveOnMouseMove: true, // 鼠标移动能触发数据窗口平移
        },
      ],
    };
    const options = ref(Object.assign({}, defaultOptions, prop.options));
    return {
      options,
    };
  },
};
</script>
