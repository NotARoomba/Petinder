import Card from "../components/Card";

export default function Home() {
  return (
    <div className="justify-center">
      <div className="justify-center text-center">
        <p className="text-8xl font-bold bg-gradient-to-t from-amaranth_pink-300 via-french_mauve-500 to-amaranth_pink text-transparent bg-clip-text">Petinder</p>
        <p className=" italic text-2xl font-bold text-gunmetal">"Encuentra la mascota perfecta hoy!"</p>
      </div>
      <div className="flex overflow-x-scroll pb-10 mt-10">
        {Array(50).fill('a').map((_v, i) => <Card key={i} image={"/img/golden-retriever.png"} name={'Lorem'} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minima quis tempore est voluptates dolor consequatur eveniet reprehenderit laborum qui?"} /> )}
      </div>
    </div>
  );
}
