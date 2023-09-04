import Select from 'react-select'
import { FilterDropdownProps } from '../utils/Types'

export default function FilterDropdown({filter, options, property, pets, setData}: FilterDropdownProps) {
    return <div className='text-center font-semibold text-xl'>
    <p>{filter}</p>
    {
        options? 
    <Select options={options} onChange={(option) => setData(pets.filter(v => v[property] == option?.value))} />
: property?
<Select options={[...new Set(pets.map((v) => v[property]))].map((v) => ({value: v, label: v}))} onChange={(option) => setData(pets.filter(v => v[property] == option?.value))} />:<></>

    }
</div>
}