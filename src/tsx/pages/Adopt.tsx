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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //fetch data from api
      async function updateData() {
        const {animals} = await callAPI(
          '/animals/',
          'GET', {}
        );
        setData(animals)
        setShowing(animals)
        setLoading(false);
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
  const style = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: (base: any) => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: "none"
    })
  }; 
  return <div className="dark:bg-gunmetal-300 dark:text-gunmetal-900 text-gunmetal min-h-[calc(100vh-208px)] pt-2 mb-auto">
    <p className="text-center md:text-5xl lg:text-7xl text-3xl my-3 mb-8 font-bold">Encuentra tu compañero ideal!</p>
    <Select isMulti styles={style} className="w-11/12 justify-center m-auto rounded-full border-8 dark:border-gunmetal-500 border-white shadow-2xl " placeholder='Busca tags...' classNames={{
      valueContainer: () => 'dark:bg-gunmetal-500',
      control: () => 'dark:border-none dark:bg-gunmetal-500',
      input: () => 'dark:text-gunmetal-900',
      indicatorsContainer: () => 'dark:bg-gunmetal-600 rounded-full',
      dropdownIndicator: () => 'dark:hover:text-gunmetal-900  dark:selection:text-gunmetal-600 dark:text-gunmetal-800 rounded-full',
      indicatorSeparator: () => 'hidden',
      clearIndicator: () => 'dark:hover:text-gunmetal-900  dark:selection:text-gunmetal-600 dark:text-gunmetal-800 rounded-full',
      menuList: () => 'dark:bg-gunmetal-500',
      multiValue: () => 'dark:bg-gunmetal-600',
      multiValueLabel: () => 'dark:text-gunmetal-900 font-semibold',
      option: () => 'dark:hover:bg-gunmetal-600 dark:bg-gunmetal-500',
      noOptionsMessage: () => 'dark:hover:bg-gunmetal-600'
    }} options={[...new Set(data.map(v => v.animal)), ...new Set(data.map(v => v.color)), ...new Set(data.map(v => v.size))].map(v => ({value: v, label: v}))} onChange={(newValue) => updateFilter(newValue)} />
    {/* need to divide the array in 4 and then distribute among the columns */}
    {showing.length != 0 ? <div className=" md:columns-1 lg:columns-2 xl:columns-3 2xl:columns-4 gap-x-24 gap-y-4 text-center w-full overflow-y-auto py-10 justify-items-center mx-auto">
      {showing.map((v, i) => (<Card name={v.name} description={v.animal} image={v.image} key={i} />
      ))}
    </div> : !loading ? <p className="text-center text-4xl text-rose-500 mt-12 font-bold">No encontramos ningun animal con esos tags!</p> : <p className="text-center text-4xl mt-12 font-bold">Cargando...</p>}
  </div>;
}
