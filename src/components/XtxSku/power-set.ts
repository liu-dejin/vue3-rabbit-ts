export type SubSets<T> = T[][]

export default function bwPowerSet<T>(originalSet: T[]): SubSets<T> {
  const subSets: SubSets<T> = []
  const numberOfCombinations = 1 << originalSet.length

  for (let combinationIndex = 0; combinationIndex < numberOfCombinations; combinationIndex++) {
    const subSet: T[] = []

    for (let setElementIndex = 0; setElementIndex < originalSet.length; setElementIndex++) {
      if ((combinationIndex & (1 << setElementIndex)) !== 0) {
        const element = originalSet[setElementIndex]
        // 只有当 element 确实存在时才 push
        if (element !== undefined) {
          subSet.push(element)
        }
      }
    }
    subSets.push(subSet)
  }

  return subSets
}
