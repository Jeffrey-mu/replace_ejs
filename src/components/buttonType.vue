<script lang="ts" setup>
import type { DataType } from '~/composables/dataType'
import { dataType } from '~/composables/dataType'
function handleClick(item: DataType): void {
  dataType.value.map(el => el.show = false)
  item.show = true
}
</script>

<template>
  <div ma-2>
    <button v-for="item in dataType" :key="item.label" pl-2 pr-2 border ml-2 b-rd :class="[item.show ? 'bg-green c-white' : '']" hover="bg-yellow/400 c-white" @click="handleClick(item)">
      {{ item.label }}
    </button>
  </div>
</template>
