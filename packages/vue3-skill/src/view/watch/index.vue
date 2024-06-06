<script setup lang="ts">
import {reactive, ref, watch} from 'vue'
const count = ref(0)
const person = ref({age:18})

const obj = reactive({
  num :1,
  car:{
    brand:"大众",
    price:"999"
  }
})

const handleClick = ()=>{
  count.value++
  obj.num  ++
  person.value.age += 1
}
// 情况一， 监视ref的基本类型
watch(count,(newValue,oldValue)=>{
  console.log("ref的基本类型",newValue, oldValue);
})
// 情况二， 监视ref的对象类型
// ❎ 直接监听ref对象类型， 监视的是对象的地址值， 不会更新
// watch(person,(newValue,oldValue)=>{
//   console.log("ref的对象类型1111",newValue, oldValue);
// },)

// 若想监视里面的属性需要
// watch(person,(newValue,oldValue)=>{
//   console.log("ref的对象类型",newValue, oldValue);
// },{deep:true})


// 情况二， 监视reactive
watch(obj,(newValue,oldValue)=>{
  // 这里打印的对象 前后的值一直， 都是修改同一个对象， 打印出来就是一致的
  console.log("obj111",newValue, oldValue);
})

// 监视 ref 对象里面的某个属性
watch(()=>person.value.age,(newValue,oldValue)=>{
  console.log("ref的对象类型",newValue, oldValue);
},)


// 情况三， 监视reactive 里面的某个属性
watch(()=>obj.num,(newValue,oldValue)=>{
  // 这里打印的对象 前后的值一直， 都是修改同一个对象， 打印出来就是一致的
  console.log("obj222",newValue, oldValue);
})

const  handleCarBrandClick = ()=>{
  obj.car.brand ="奥迪"
}
const  handleCarClick = ()=>{
  obj.car ={ brand:"小米",price:"666"}
}

watch(()=>obj.car,(newValue,oldValue)=>{
  // 这里打印的对象 前后的值一直， 都是修改同一个对象， 打印出来就是一致的
  console.log("obj222---car",newValue, oldValue);
})


// 多个监听对象采用 数组的形式
watch([()=>obj.num,()=>obj.car],(newValue,oldValue)=>{
  // 这里打印的对象 前后的值一直， 都是修改同一个对象， 打印出来就是一致的
  console.log("obj3333--",newValue, oldValue);
})

</script>

<template>
<div>
  <h2>watch</h2>
  <div>数量---{{count}} ---{{obj.num}}</div>
  <div>person-{{person.age}}</div>
  <button @click="handleClick"> +++</button>
  <div>{{obj.car.brand}}--{{obj.car.price}}</div>
  <button @click="handleCarBrandClick"> 修改品牌</button>
  <button @click="handleCarClick"> 修改车</button>
</div>
</template>

<style scoped>

</style>
