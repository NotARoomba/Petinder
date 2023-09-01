import Card from "../components/Card";

export default function Home() {
  return (
    <div className="justify-center">
      <div className="justify-center text-center mb-20">
        <p className="text-8xl font-bold bg-gradient-to-t from-hot_pink-300 via-persian_pink to-tickle_me_pink text-transparent bg-clip-text mb-2">Petinder</p>
        <p className=" italic text-2xl font-bold text-gunmetal">"Encuentra tu compañero ideal!"</p>
      </div>
      <div className="justify-start flex items-center">
        <img src="/img/family-dog.jpg" className=" w-2/5 rounded-xl mx-32 border-hot_pink bo" />
        <div className="inline text-left align-middle items-center">
          <p className="text-6xl font-semibold mb-5" >¿Quienes Somos?</p>
          <p className="text-2xl max-w-xl" >Somos una fundacion comprometida con la noble causa de reunir a las personas con sus leales compañeros peludos perdidos, y de darles una segunda oportunidad a las almas indefensas que han sufrido el flagelo del maltrato. </p>
        </div>
      </div>
    </div>
  );
}
