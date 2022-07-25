<script setup lang="ts">
import 'vue3-json-viewer/dist/index.css'
export interface RegExpMatchArrayItem {
  [key: number]: string
  index?: number
  input?: string
}
type forEachFN = (item: RegExpMatchArrayItem, index: number) => void

const REG_PRE_FIX = [/href=.\.?/g, /src=.\.?/g]
const input = ref<string>('')

function isSymbol(RegExpMatchArrayItemValue: string): string {
  const LAST_CHAR = RegExpMatchArrayItemValue.slice(-1)
  let result = `${RegExpMatchArrayItemValue}../`
  if (LAST_CHAR === '.')
    result = `${RegExpMatchArrayItemValue}.`

  return result
}
let preIndex = 0

const output = computed(() => {
  preIndex = 0
  if (!input.value)
    return ''
  let outputString = ''
  const MATCH_RETURN_LIST_FALT = ((REG_PRE_FIX.map(item => [...new Set(input.value.matchAll(item))]).flatMap(item => item)).sort((a: any, b: any) => {
    return a.index - b.index
  }))

  // @ts-expect-error
  forEach(selfJoinString)
  function forEach(fn: forEachFN) {
    MATCH_RETURN_LIST_FALT.forEach(fn)
  }
  function selfJoinString(item: RegExpMatchArrayItem, index: number) {
    const { input = '', index: RegExpMatchArrayItemIndex = 0 } = item
    outputString += input.slice(preIndex, RegExpMatchArrayItemIndex) + isSymbol(item[0])
    preIndex = RegExpMatchArrayItemIndex + item[0].length
    if (index === MATCH_RETURN_LIST_FALT.length - 1)
      outputString += input.slice(preIndex)
  }
  return outputString
})
</script>

<template>
  <div flex h80vh>
    <div flex="1">
      <textarea
        v-model="input"
        class="textarea"
        border="1 rd"
        cols="30"
        rows="10"
        placeholder="input"
      />
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
