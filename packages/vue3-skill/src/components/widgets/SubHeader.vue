<template>
  <div>
    <div class="flex items-center justify-between px-2 py-8 b-b-1 b-b-solid b-b-#e8eaec mb-10">
      <div class="flex items-center">
        <div class="w-3 h-12 bg-#009fff mr-18" />
        <div class="text-14 text-#000c18 font-bold ">
          {{ title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: '小标题',
      type: String,
      required: true
    }
  }
}
</script>
