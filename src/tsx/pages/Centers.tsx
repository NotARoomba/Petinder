import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';
import { callAPI } from '../utils/Functions';
import { Center, ThemeState } from '../utils/Types';
import Marker from '../components/Marker';
import { DarkTheme } from '../utils/Data';

export default function Centers() {
  const [data, setData] = useState<Array<Center>>([])
  const [opacity, setOpacity] = useState(1)
  const [theme, setTheme] = useState<ThemeState>(ThemeState.LIGHT);
  const updateTheme = () => {
      // Change the icons inside the button based on previous settings
      if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme(ThemeState.DARK)
    } else {
        setTheme(ThemeState.LIGHT);
    }
  }
  useEffect(() => {
    //fetch data from api
      async function updateData() {
        const {centers} = await callAPI(
          '/centers/',
          'GET', {}
        );
        setData(centers);
      }
      updateData();
      updateTheme();
  }, [])
  return <div className="min-h-[calc(100vh-208px)] dark:bg-gunmetal-300 dark:text-gunmetal-900 text-gunmetal pt-2 mb-auto ">
    <p className="text-center text-7xl my-3 mb-8 font-bold">Centros</p>
    <div className='w-10/12 h-[55vh] xl:h-[60vh] justify-center mx-auto'>

    {theme && <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyA1ZMdrjnYTEZKi7_7rzQhYn53EMKmcNVk" }} center={{
      lat: 8.800433,
      lng: -74.737480
    }} zoom={6}  onDrag={() => setOpacity(0)} onDragEnd={() => {setOpacity(1); updateTheme()}} options={{ styles: theme==ThemeState.LIGHT? [] : DarkTheme }}>
      {data.map((v, i) => <Marker opacity={opacity} key={i} lat={v.lat} lng={v.long} text={v.name}/>)}
      </GoogleMapReact>}
    </div>
  </div>;
}
