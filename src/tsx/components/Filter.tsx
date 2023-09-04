import Select from 'react-select'
import { FilterProps } from '../utils/Types'
import FilterDropdown from './FilterDropdown'

export default function Filter({pets, setData}: FilterProps) {
    return <div className="w-1/5 h-4/5 shadow-xl rounded-r-xl bg-gunmetal-900 mx-2">
        <p className="text-3xl text-center font-bold mb-4">Filtros</p>
        
        <div>
            <FilterDropdown filter='Tipo de Animal' property='animal' pets={pets} setData={setData} />
            <FilterDropdown filter='Color' property='color' pets={pets} setData={setData} />
            <div className='text-center font-semibold text-xl'>
                <p>Edad</p>
                <Select options={[{value: [0, 5], label: '0-5 Años'}, {value: [5, 10], label: '5-10 Años'}, {value: [10, 15], label: '10-15 Años'}]} isSearchable={false} />
            </div>
            <div className='text-center font-semibold text-xl'>
                <p>Tamaño</p>
                <Select options={[...new Set(pets.map((v) => v.size))].map((v) => ({value: v, label: v}))} isSearchable={false} />
            </div>
        </div>
        {/* <FilterDropdown filter='Edad' options={[{value: [0, 5], label: '0-5 Años'}, {value: [5, 10], label: '5-10 Años'}, {value: [10, 15], label: '10-15 Años'}]} /> */}

    </div>
}