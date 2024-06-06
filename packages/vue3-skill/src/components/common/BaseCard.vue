<template>
  <div>
    <SubHeader :title="title"/>
    <div>
      <slot name="header" />
    </div>
    <div :class="[padding && 'py-15 px-20', border && 'b-1 b-solid b-#e8eaec']">
      <slot />
    </div>
    <div>
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import SubHeader from "../widgets/SubHeader.vue";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    border: {
      type: Boolean,
      default: true,
    },
    padding: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    SubHeader,
  },
};
</script>
