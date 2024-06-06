<!-- <script >
import { computed } from "vue";
export default {
  props: {
    modelValue: String,
  },
  setup(props, { emit }) {
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      },
    });
    return { value };
  },
};
</script> -->
<script setup>
import { computed } from "vue";
const props = defineProps({
  modelValue: String,
});

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div>{{ value }}</div>
</template>
