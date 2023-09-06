import { useEffect, useState } from "react";
import Select, { MultiValue } from 'react-select'
import { Pet } from "../utils/Types";
import Card from "../components/Card";
import { callAPI } from "../utils/Functions";

export default function Adopt() {
  // data is all the real data
  const [data, setData] = useState<Array<Pet>>([])
  // showing is the modified data
  const [showing, setShowing] = useState<Array<Pet>>([])
  useEffect(() => {
    //fetch data from api
      async function updateData() {
        const {animals} = await callAPI(
          '/animals/',
          'GET', {}
        );
        setData(animals)
        setShowing(animals)
      }
      updateData();
  }, [])
  const updateFilter = (filters: MultiValue<{value: string, label: string}>) => {
    console.log(filters)
    setShowing(data)
    console.log(showing)
    for (const filter of filters) {
      setShowing(showing.filter(v => v.color === filter.value || v.animal === filter.value || v.size === filter.value))
    }
  }
  return <div className="dark:bg-gunmetal-300 dark:text-gunmetal-900 text-gunmetal min-h-[calc(100vh-208px)] pt-2 mb-auto">
    <p className="text-center text-7xl my-3 mb-8 font-bold">Encuentra tu compañero ideal!</p>
    <Select isMulti className="w-11/12 justify-center m-auto" placeholder='Busca tags...' classNames={{
      valueContainer: () => 'dark:bg-gunmetal-500',
      control: () => 'dark:border-gunmetal-700',
      input: () => 'dark:text-gunmetal-900',
      indicatorsContainer: () => 'dark:bg-gunmetal-600',
      dropdownIndicator: () => 'dark:hover:text-gunmetal-900  dark:selection:text-gunmetal-600 dark:text-gunmetal-800',
      indicatorSeparator: () => 'hidden',
      clearIndicator: () => 'dark:hover:text-gunmetal-900  dark:selection:text-gunmetal-600 dark:text-gunmetal-800',
      menuList: () => 'dark:bg-gunmetal-500',
      multiValue: () => 'dark:bg-gunmetal-600',
      multiValueLabel: () => 'dark:text-gunmetal-900 font-semibold',
      option: () => 'dark:hover:bg-gunmetal-600 dark:bg-gunmetal-500',
      noOptionsMessage: () => 'dark:hover:bg-gunmetal-600'
    }} options={[...new Set(data.map(v => v.animal)), ...new Set(data.map(v => v.color)), ...new Set(data.map(v => v.size))].map(v => ({value: v, label: v}))} onChange={(newValue) => updateFilter(newValue)} />
    {showing.length != 0 ? <div className="grid grid-cols-4 w-full overflow-y-auto py-10">
      {showing.map((v, i) => (<Card name={v.name} description={v.animal} image={v.image} key={i} />
      ))}
    </div> : <p className="text-center text-4xl text-rose-500 mt-12 font-bold">No encontramos ningun animal con esos tags!</p>}
  </div>;
}
