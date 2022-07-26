<script setup lang="ts">
const input = ref<string>('')
const output = computed(() => getOutput(input.value))
</script>

<template>
  <div flex h80vh>
    <div flex="1">
      <textarea id="" v-model="input" class="textarea" border cols="30" rows="10" placeholder="output" />
    </div>
    <div flex="1">
      <textarea id="" v-model="output" class="textarea" border cols="30" rows="10" placeholder="output" disabled />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style>
.textarea {
  position: relative;
  outline: none;
  padding: 10px !important;
  width: 80%;
  height: 100%;
  background: none;
}
 .dark .jv-container.jv-light,
 .dark .jv-array,
 .dark .jv-object,
 .dark .jv-key {
   background: #111 !important;
   color: aliceblue !important;
 }
 .dark .jv-ellipsis {
   background: #111 !important;
   color: aliceblue !important;
 }
 .jv-tooltip .right {
  position:absolute;
 }
</style>

