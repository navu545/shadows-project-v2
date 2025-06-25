import { PayPal, PayPalQR, paypalTwo } from "../assets/images";
import Donorbox from "./DonorBox";
import { useEffect } from "react";

const Bank: React.FC = () => {

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "auto" }); 
    }, []);

  return (
    <div className="bank-info-wrap flex flex-col items-center">
      <h1 className="font-semibold text-5xl mt-15 mb-15">Bank Information</h1>
      <div className="paypal-wrapper flex items-center max-w-6xl border-2 border-gray-300 rounded-lg mb-15 px-10">
        <div className="qr-wrap">
          <img src={PayPalQR} className="w-50 h-auto"></img>
        </div>
        <div className="paypal-text mx-10 my-10">
          <img src={PayPal} className="w-30 h-auto"></img>
          <div className="mb-5"></div>
          <p>Payment of donations directly to the PayPal account.</p>
          <div className="mb-5"></div>
          <img
            className="rounded-lg cursor-pointer w-50 h-auto"
            src={paypalTwo}
            onClick={() =>
              window.open(
                "https://www.paypal.com/donate/?hosted_button_id=2CKZBXFJFX3CL",
                "_blank"
              )
            }
          ></img>
        </div>
      </div>

      <div className="donor-box-wrap flex flex-col border-2 border-gray-300 max-w-6xl rounded-lg items-center mb-20 px-18">
        <div className="donor-heading my-10  mx-10 my-10">
          <h1 className="text-3xl font-semibold">
            Become a supporting monthly member
          </h1>
        </div>
        <div className="donor-form-wrap mb-10 w-3/5">
          <Donorbox />
        </div>
      </div>
    </div>
  );
};

export default Bank;
