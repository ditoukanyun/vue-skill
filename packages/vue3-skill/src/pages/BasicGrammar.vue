<script setup lang="ts">
import Layout from "@/components/Layout/Layout.vue";

console.log(1212)
</script>

<template>

  <Layout>
    <template v-slot:aside>
      <h5 class="bg-#f5f5f6 text-#5f5f64  text-align-center py-10">基础语法</h5>
      <el-menu
          class="h-100vh"
          active-text-color="#5f8bfd"
          active-background-color="#5f8bfd"
          background-color="#f5f5f6"
      >
        <!--          text-color="#5f5f64"-->
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location/>
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon>
            <icon-menu/>
          </el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon>
            <document/>
          </el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <setting/>
          </el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </template>
    <template v-slot:content></template>
  </Layout>

</template>

