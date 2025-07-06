import { PayPal, PayPalQR, paypalTwo } from "../assets/images";
import Donorbox from "./DonorBox";
import { useEffect } from "react";

const Bank: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="bank-info-wrap flex flex-col items-center p-2">
      <h1 className="font-semibold text-3xl xs:text-4xl sm:text-5xl md:text-6xl mt-10 mb-10 text-center">
        Bank Information
      </h1>
      <div>
        <div className="paypal-wrapper flex flex-col-reverse md:flex-row items-center md:items-start max-w-6xl border-2 border-gray-300 rounded-lg mb-10 px-5 md:px-10 py-5">
          <div className="qr-wrap mt-5 md:mt-0">
            <img
              src={PayPalQR}
              className="w-70 md:w-50 h-auto mx-auto md:mx-0"
            />
          </div>

          <div className="paypal-text flex flex-col items-center items-start md:mx-10 my-5 md:my-10 md:text-center md:text-left">
            <img src={PayPal} className="w-24 md:w-30 h-auto mb-4" />
            <p className="mb-5 max-w-xs md:max-w-none">
              Payment of donations directly to the PayPal account.
            </p>
            <img
              className="rounded-lg cursor-pointer w-40 md:w-50 h-auto"
              src={paypalTwo}
              onClick={() =>
                window.open(
                  "https://www.paypal.com/donate/?hosted_button_id=2CKZBXFJFX3CL",
                  "_blank"
                )
              }
            />
          </div>
        </div>

        <div className="donor-box-wrap flex flex-col border-2 border-gray-300 max-w-6xl rounded-lg items-center mb-20 px-5 md:px-18">
          <div className="donor-heading my-8 md:my-10 mx-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold">
              Become a supporting monthly member
            </h1>
          </div>
          <div className="donor-form-wrap mb-8 md:mb-10  md:w-3/5">
            <Donorbox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
