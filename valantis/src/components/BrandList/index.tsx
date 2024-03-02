import { Dispatch, FC, SetStateAction, memo, useEffect, useState } from "react";
import { useGetFieldsMutation } from "../../api/api";
import { getUniqueBrands } from "../../utils/getUniqueBrands";

type Props = {
  setBrand: Dispatch<SetStateAction<string | number | null>>
}

export const BrandList: FC<Props> = memo(function BrandList({
  setBrand
}: Props) {
  const [brands, setBrands] = useState<string[]>([])
  const [mutateFields] = useGetFieldsMutation()

  useEffect(() => {
    async function getBrands() {
      const { result } = await mutateFields({ field: 'brand' }).unwrap()
      setBrands(getUniqueBrands(result))
    }
    getBrands()
  }, [mutateFields])

  return (
    <div>
      <input
        type="text"
        name="brand"
        list="brandlist"
        onChange={(e) => {
          const brandName = e.target.value.trim()
          if (brandName === '' || brandName === 'Не выбран') {
            setBrand(null)
          } else {
            setBrand(brandName)
          }
        }}
      />
      <datalist id="brandlist">
        {brands.length > 0 &&
          <>
            {brands.map((brand) => <option key={brand} value={brand} />)}
          </>
        }
      </datalist>
    </div>
  )
})