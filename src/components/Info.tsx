
const Info = () => {
  return (
    <div className="help-save-wrap flex flex-col items-center md:mt-20 mb-25">
      <div className="help-save flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-10 max-w-6xl w-full">
      
        <div className="help-img hidden xs:flex justify-center md:block mt-0 md:mt-20">
          <img
            src="https://ik.imagekit.io/shadows/Shadows-project/SaveUkranianArt.png"
            alt="burning-art"
            className="scale-90 md:scale-100"
          />
        </div>
       
        <div className="help-text-box flex flex-col px-4 md:px-5">
          <div className="help-text mb-5">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
              Help Save Ukrainian Culture
            </h1>
            <p className="mt-5 mb-5 text-base sm:text-lg md:text-xl">
              This is a war on the very essence and existence of Ukraine. Along
              with our people and our infrastructure, our heritage and our
              identity are under attack. Putin has continuously challenged the
              notion of a historically sovereign and distinct Ukrainian state,
              often employing colonial rhetoric to justify the Russian
              repression of Ukrainians.
              <br />
              <br />
              Your support goes directly to museums, archives, and cultural
              sites in need. With your donation, we can continue our efforts to
              preserve Ukraine’s national heritage for generations to come.
            </p>
          </div>
          <div className="help-box grid grid-cols-1 sm:grid-cols-3 gap-5 p-5 bg-[#F8FAF9] rounded-lg">
            <div className="help-box-1 text-center">
              <h1 className="text-2xl font-extrabold">10k+</h1>
              <p>Artifacts destroyed or stolen</p>
            </div>
            <div className="help-box-2 text-center">
              <h1 className="text-2xl font-extrabold">1k+</h1>
              <p>Museums and cultural sites damaged</p>
            </div>
            <div className="help-box-3 text-center">
              <h1 className="text-2xl font-extrabold">350+</h1>
              <p>Cultural sites destroyed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
