<template>
  <div>
    <!-- <child :defaultFileList="fileList" @add="add" @sub="sub" /> -->
    <setup-child v-model="txt" />
    <compute-child v-model="txt" />
  </div>
</template>

<script>
import Child from "./Child.vue";
import SetupChild from "./SetupChild.vue";
import ComputeChild from "./ComputeChild.vue";
import { onMounted, ref, watch } from "vue";

export default {
  components: {
    Child,
    SetupChild,
    ComputeChild,
  },
  setup() {
    const fileList = ref([]);
    const txt = ref("");

    const request = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: [
              { id: 1, name: "cc", age: 12 },
              { id: 2, name: "bb", age: 12 },
            ],
            value: "1213",
          });
        }, 1000);
      });
    };
    onMounted(async () => {
      const res = await request();
      console.log("res", res);
      fileList.value = res.data;
      txt.value = res.value;
    });

    const add = (aa) => {
      console.log("aa", aa);
    };
    const sub = (bb) => {
      console.log("bb", bb);
    };

    watch(txt, (newValue) => {
      console.log(txt.value, newValue);
    });
    return {
      fileList,
      add,
      sub,
      txt,
    };
  },
};
</script>

<style>
</style>