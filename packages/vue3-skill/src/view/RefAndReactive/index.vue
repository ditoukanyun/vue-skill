<script setup lang="ts">
import {reactive, onMounted} from 'vue'

let obj = reactive({name: "aa", age: 12})

const handleNameClick = ()=>{
  obj.name  += "~"
}

const handleAgeClick = ()=>{
  obj.age +=  1
}

onMounted(()=>{
  setTimeout(()=>{
    // 重新分配一个新对象， 会失去响应式
    // obj = {name:"ccc", age:18, sex: "男"}
    // 使用Object.assign去整体替换
    obj = Object.assign(obj, {name:"ccc",age:18, sex: "男"})
  },500)
})


</script>
<template>
<div>
    <h2>obj</h2>
    <div>{{obj.name}}-{{obj.age}}</div>

   <button @click="handleNameClick">名字改变</button>
   <button @click="handleAgeClick">年龄改变</button>
</div>
</template>
