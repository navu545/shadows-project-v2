import { instagram, linkdin } from "../assets/images";

const Contacts = () => {
  return (
    <div className="flex flex-col items-center text-center mt-10 xs:mt-15 overflow-hidden mb-5 md:mb-25">
      <div className="contacts flex flex-col max-w-6xl">
        <h1 className="font-bold text-xl mb-3 xs:text-3xl xs:mb-5">Contacts</h1>
        <p className="font-semibold xs:text-xl underline mb-10">
          shadows.ukraine@gmail.com
        </p>
        <div className="linkdin-insta hidden md:grid grid-cols-2 gap-4 divide-x divide-gray-300 text-xl justify-center">
          <div
            className="flex w-full cursor-pointer gap-4 mr-6"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/the-shadows-project/",
                "_blank"
              )
            }
          >
            <img src={linkdin} className="cursor-pointer"></img>
            <button className="cursor-pointer">Linkedin</button>
          </div>

          <div
            className="flex cursor-pointer gap-4 ml-6"
            onClick={() =>
              window.open(
                "https://www.instagram.com/shadows.project/",
                "_blank"
              )
            }
          >
            <img src={instagram} className="cursor-pointer"></img>
            <button className="cursor-pointer">Instagram</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
