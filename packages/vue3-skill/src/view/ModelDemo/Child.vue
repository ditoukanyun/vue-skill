<template>
  <div>
    <div>
      {{ count }}
    </div>
    <div>
      <button @click="handleAdd">++</button
      ><button @click="handleSub">--</button>
    </div>
    <div v-for="item in fileList" :key="item.id">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  props: {
    defaultFileList: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const count = ref(0);

    const handleAdd = () => {
      count.value++;
      emit("add", count.value);
    };
    const handleSub = () => {
      count.value--;
      emit("sub", count.value);
    };

    const fileList = ref([]);
    watch(
      () => props.defaultFileList,
      (newValue) => {
          console.log("newValue", newValue, props.defaultFileList);
        fileList.value = props.defaultFileList
        }, {immediate:true}
    );

    return { count, fileList, handleAdd, handleSub };
  },
};
</script>

