
const Info = () => {
  return (
    <div className="help-save-wrap flex flex-col items-center mt-20 mb-25">
      <div className="help-save grid grid-cols-2 gap-15 max-w-6xl">
        <div className="help-img mt-20">
          <img
            src="https://ik.imagekit.io/shadows/Shadows-project/SaveUkranianArt.png"
            alt="burning-art"
            className="scale-110"
          ></img>
        </div>
        <div className="help-text-box flex flex-col pl-5 pr-5">
          <div className="help-text mb-5">
            <h1 className="font-bold text-4xl">Help Save Ukrainian Culture</h1>
            <p className="mt-5 mb-5 text-xl">
              This is a war on the very essence and existence of Ukraine. Along
              with our people and our infrastructure, our heritage and our
              identity are under attack. Putin has continuously challenged the
              notion of a historically sovereign and distinct Ukrainian state,
              often employing colonial rhetoric to justify the Russian
              repression of Ukrainians.
              <br />
              <br /> Your support goes directly to museums, archives, and
              cultural sites in need. With your donation, we can continue our
              efforts to preserve Ukraine’s national heritage for generations to
              come.
            </p>
          </div>
          <div className="help-box grid grid-cols-3 gap-5 p-5 bg-[#F8FAF9] rounded-lg">
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
