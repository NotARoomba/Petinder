export default function Home() {
  return (
    <div className="dark:bg-gunmetal-300 dark:text-gunmetal-900 text-gunmetal h-full pt-12 mb-auto">
      <div className="justify-center text-center">
        <p className="text-6xl sm:text-8xl font-bold bg-gradient-to-t from-hot_pink-300 via-persian_pink to-tickle_me_pink text-transparent bg-clip-text mb-2">
          Petinder
        </p>
        <p className=" italic text-2xl font-bold text-gunmetal dark:text-gunmetal-800">
          "Encuentra tu compañero ideal!"
        </p>
      </div>
      <div className="h-full pb-32">
        <div className="flex flex-col justify-center mx-auto md:justify-start md:flex-row items-center mt-24">
          <img
            src="/img/family-dog.jpg"
            className=" w-2/5 min-w-[300px] md:min-w-[325px] rounded-xl mx-16 border-hot_pink bo"
          />
          <div className="inline text-center md:text-left align-middle items-center mx-10">
            <p className="text-6xl font-semibold mb-5">¿Quienes Somos?</p>
            <p className="text-2xl max-w-xl">
              Somos una fundación comprometida con la noble causa de reunir a personas con sus leales compañeros peludos perdidos, y de darles una segunda oportunidad a las almas indefensas que han sufrido el flagelo del maltrato.{" "}
            </p>
          </div>
        </div>

        <div className="justify-end flex md:flex-row flex-col-reverse items-center mt-24">
          <div className="inline text-center md:text-left align-middle items-center mx-10">
            <p className="text-6xl font-semibold mb-5">Nuestro Misión</p>
            <p className="text-2xl max-w-xl">
              Nuestra misión trasciende más allá de las fronteras digitales, ya que también establecemos vínculos con refugios y organizaciones dedicadas al bienestar animal en la región caribeña.
            </p>
          </div>
          <img
            src="/img/dog-smiling.jpg"
            className=" w-2/5 min-w-[300px] md:min-w-[325px] rounded-xl mx-16 border-hot_pink"
          />
        </div>
      </div>
    </div>
  );
}
