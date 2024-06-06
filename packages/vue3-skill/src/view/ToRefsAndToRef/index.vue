<script setup lang="ts">
import {reactive, toRefs, toRef, onMounted} from 'vue'

let obj = reactive({name: "aa", age: 12})

// 直接解构不会有响应式
// const {name, age } = obj

// 正确写法要使用 toRefs
const {name} = toRefs(obj)

// function useFeatureX() {
//   const state = reactive({
//     foo: 1,
//     bar: 2
//   })
//
//   // ...基于状态的操作逻辑
//
//   // 在返回时都转为 ref
//   return toRefs(state)
// }
//
// // 可以解构而不会失去响应性
// const { foo, bar } = useFeatureX()

// 创建一个只读的 ref，当访问 .value 时会调用此 getter 函数
const age = toRef(()=>obj.age)

const age1 = toRef(obj, "age")
const handleNameClick = ()=>{
  // obj.name  += "~"
  name.value  += "~"
}

const handleAgeClick = ()=>{
  // obj.age +=  1
  age1.value +=1
}

onMounted(()=>{
  setTimeout(()=>{
    obj = Object.assign(obj, {name:"ccc",age:18, sex: "男"})
    // obj = {name:"ccc", age:18, sex: "男"}
  },500)
})


</script>
<template>
  <div>
    <h2>ToRefsAndToRef</h2>
    <div>{{obj.name}}-{{obj.age}}</div>
    <div>{{name}}-{{age}}</div>
    <div>{{age1}}</div>
    <button @click="handleNameClick">名字改变</button>
    <button @click="handleAgeClick">年龄改变</button>
  </div>
</template>
