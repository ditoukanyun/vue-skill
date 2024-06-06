<script setup lang="ts">

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <slot name="aside"></slot>
      </el-aside>
      <el-container>
        <el-header>
          <slot name="header"></slot>
        </el-header>
        <el-main>
          <slot name="content"></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>

</style>
