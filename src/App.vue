<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import { ref, Ref } from 'vue';
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <el-container class="full">
    <el-header height="'30%'">Header</el-header>
    <el-container style=" height:calc(100% - 30%)">
      <el-aside width="204px" style="height:100%;overflow-y:hidden">
        <aside-one></aside-one>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.full {
  height: 100%;
}
</style>
