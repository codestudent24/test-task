export const getUniqueIds = (array: string[]) => {
  const uniqueIds = new Set(array)
  return Array.from(uniqueIds).slice(0, 50)
}