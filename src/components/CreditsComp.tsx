import { credit1,credit2,credit3,credit4,credit5 } from "../assets/images"

const CreditsComp = () => {
  return (
    <div className="credits-wrapper flex flex-col items-center">
      <div className="credits max-w-7xl">
        <div className="credits-heading">
          <h1>
            The Stolen Art Campaign would not be possible without the help of
            our friends:
          </h1>
        </div>
        <div className="credit-details"></div>
        <div className="partners">
          <div className="partners-heading">
            <h1>ALL OUR PARTNERS</h1>
          </div>
          <div className="partners-img">
            <img src={credit1}></img>
            <img src={credit2}></img>
            <img src={credit3}></img>
            <img src={credit4}></img>
            <img src={credit5}></img>
          </div>
          <div className="thankyou">
                <h1>THANK YOU!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditsComp
