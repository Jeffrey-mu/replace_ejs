export interface RegExpMatchArrayItem {
  [key: number]: string
  index?: number
  input?: string
}
export type forEachFN = (item: RegExpMatchArrayItem, index: number) => void
export const REG_PRE_FIX = /(href|src)=.(\.?)/g

export function isSymbol([FIRST_CHAR, _, LAST_CHAR]: string[]): string {
  let result = `${FIRST_CHAR}../`
  if (LAST_CHAR === '.')
    result = `${FIRST_CHAR}.`

  return result
}
export function getMatchAllReturnArray(string: string): RegExpMatchArrayItem[] {
  return [...string.matchAll(REG_PRE_FIX)].sort((a: any, b: any) => {
    return a.index - b.index
  })
}
export function getOutput(target: string): string {
  let preIndex = 0
  if (!target)
    return ''
  let outputString = ''
  const MATCH_RETURN_LIST_FALT = getMatchAllReturnArray(target)
  const selfJoinString: forEachFN = function selfJoinString(item, index) {
    const { input = '', index: RegExpMatchArrayItemIndex = 0 } = item
    outputString += input.slice(preIndex, RegExpMatchArrayItemIndex) + isSymbol(item as any)
    preIndex = RegExpMatchArrayItemIndex + item[0].length
    if (index === MATCH_RETURN_LIST_FALT.length - 1)
      outputString += input.slice(preIndex)
  }
  MATCH_RETURN_LIST_FALT.forEach(selfJoinString)

  return outputString
}
