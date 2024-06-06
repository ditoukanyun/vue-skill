
<template>
  <!-- 图表案例 -->
  <div class="w-100% h-100%">
    <!-- 柱状图 -->
    <div class="mb-10 flex gap-x-20">
      <BarDemo1 class="flex-1" />
      <BarDemo2 class="flex-1" />
    </div>
    <div class="mb-10 flex gap-x-20">
      <BarDemo3 class="flex-1" />
    </div>
    <!-- 折线图 -->
    <div class="mb-10 flex gap-x-20">
      <LineDemo1 class="flex-1" />
    </div>
    <div class="mb-10 flex gap-x-20">
      <RingDemo1 class="flex-1" />
    </div>
    <div class="mb-10 flex gap-x-20">
      <RingDemo2 class="flex-1" />
    </div>
    <div class="mb-10 flex gap-x-20">
      <RingDemo3 class="flex-1" />
    </div>
  </div>
</template>

<script>

import BarDemo1 from './BarDemo/BarDemo1.vue'
import BarDemo2 from './BarDemo/BarDemo2.vue'
import BarDemo3 from './BarDemo/BarDemo3.vue'
import LineDemo1 from './LineDemo/LineDemo1.vue'
import RingDemo1 from './RingDemo/RingDemo1.vue'
import RingDemo2 from './RingDemo/RingDemo2.vue'
import RingDemo3 from './RingDemo/RingDemo3.vue'

export default {
  components: {
    BarDemo1,
    BarDemo2,
    BarDemo3,
    LineDemo1,
    RingDemo1,
    RingDemo2,
    RingDemo3
  },
  props: {

  },
  setup () {
    return {}
  }
}
</script>
