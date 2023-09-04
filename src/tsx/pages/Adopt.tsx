import { useEffect, useState } from "react";
import Select, { MultiValue } from 'react-select'
import { Pet } from "../utils/Types";
import { DATA } from "../utils/Data";
import Card from "../components/Card";

export default function Adopt() {
  // data is all the real data
  const [data, setData] = useState<Array<Pet>>([])
  // showing is the modified data
  const [showing, setShowing] = useState<Array<Pet>>([])
  useEffect(() => {
    //fetch data from api
    const d = DATA()
    setData(d)
    setShowing(d)
  }, [])
  const updateFilter = (filters: MultiValue<{value: string, label: string}>) => {
    console.log(filters)
    setShowing(data)
    for (const filter of filters) {
      setShowing(showing.filter(v => v.color === filter.value || v.animal === filter.value || v.size === filter.value))
    }
  }
  return <div className="mt-5">
    <Select isMulti className="px-5" options={[...new Set(data.map(v => v.animal)), ...new Set(data.map(v => v.color)), ...new Set(data.map(v => v.size))].map(v => ({value: v, label: v}))} onChange={(newValue) => updateFilter(newValue)} />
    <div className="grid grid-cols-4 w-full overflow-y-auto">

      {showing.map((v, i) => (<Card name={v.name} description={v.animal} image={v.image} key={i} />
      ))}
    </div>
  </div>;
}
