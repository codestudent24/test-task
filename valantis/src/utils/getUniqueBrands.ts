export const getUniqueBrands = (array: (string | null)[]): string[] => {
  const filtered = array.filter(brand => brand !== null).sort()
  const arrayWithNull = ['Не выбран', ...filtered] as string[]
  const uniqueBrands = new Set(arrayWithNull)
  return Array.from(uniqueBrands)
}