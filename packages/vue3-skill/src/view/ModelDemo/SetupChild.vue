<!-- <script setup>
const props = defineProps({
  'modelValue': String,
})
const emit = defineEmits(["update:modelValue"])
</script>

<template>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>
 -->

 <script >
import { ref, watch } from "vue";
export default {
  props: {
    modelValue: String,
  },
  setup(props, { emit }) {
    // 创建响应式变量
    const inputValue = ref(props.modelValue);

    // 处理输入变化
    const handleChange = (event) => {
      inputValue.value = event.target.value;
      emit("update:modelValue", event.target.value);
    };

    watch(
      () => props.modelValue,
      (newValue) => {
        console.log("newValue", newValue, props.modelValue);
        inputValue.value = props.modelValue;
      },
      { immediate: true }
    );

    return {
      inputValue,
      handleChange,
    };
  },
};
</script>

<template>
  <input :value="inputValue" @input="handleChange" />
</template>