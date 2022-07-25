export interface DataType {
  label: string
  type: string[]
  show: boolean
}
export const dataType = ref<DataType[]>([
  {
    label: 'json',
    type: [],
    show: true,
  },
  {
    label: '违规/下线',
    type: ['违规', '下线'],
    show: false,
  },
  {
    label: '缺ads',
    type: ['缺ads'],
    show: false,
  },
])
