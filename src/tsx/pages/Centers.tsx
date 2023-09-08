import GoogleMapReact from 'google-map-react';

export default function Centers() {
  return <div className="min-h-[calc(100vh-208px)] dark:bg-gunmetal-300 dark:text-gunmetal-900 text-gunmetal pt-2 mb-auto ">
    <p className="text-center text-7xl my-3 mb-8 font-bold">Centros</p>
    <div className='w-10/12 h-[50vh] justify-center mx-auto'>

    <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyA1ZMdrjnYTEZKi7_7rzQhYn53EMKmcNVk" }} center={{
      lat: 10.99835602,
      lng: 77.01502627
    }} zoom={11}>
      </GoogleMapReact>
    </div>
  </div>;
}
