import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ThankYou from "./Thankyou";
import LoaderMini from "./Loader/LoaderMini";
import { crossPNG } from "../assets/images";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormCompProps {
  onClose?: () => void;
  formOnNgo?: boolean;
 
}


const maxLengths: Record<string, number> = {
  name: 50,
  email: 100,
  subject: 100,
  message: 450,
};

const Formcomp = ({onClose,formOnNgo}: FormCompProps) => {

  const formCompRef = useRef<HTMLDivElement | null>(null);

  const [formSize, setFormSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (formCompRef.current) {
      const { width, height } = formCompRef.current.getBoundingClientRect();
      setFormSize({ width, height });
    }
  }, []);

  console.log(formSize)

  const [spnsrMuseumForm, setSpnsrMuseumForm] = useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  const [thankYou, setThankYou] = useState(false);

  const showThankYou = () => {
    setThankYou(false);
    console.log(`thank you state right now ${thankYou}`);
  };

  const validateEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const updateSpnsrForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const maxLength = maxLengths[name] || Infinity;
    if (value.length < maxLength) {
      setSpnsrMuseumForm((prevData) => ({
        ...prevData,
        id: new Date().getTime().toString(),
        [name]: value,
      }));
    }
  };

  const spsnrFormSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { name, email, subject, message } = spnsrMuseumForm;

    if (!name || !email || !subject || !message) {
      setError("Please fill in all fields");
      setTimeout(() => setError(null), 1000);
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setTimeout(() => setError(null), 1000);
      return;
    }

    if (subject.length > 100) {
      setError("Subject can't exceed 100 characters");
      setTimeout(() => setError(null), 1000);
      return;
    }

    if (message.length < 10) {
      setError("Message should be at least 10 characters long.");
      setTimeout(() => setError(null), 1000);
      return;
    }

    try {
      setError(null);
      setLoading(true);

      const response = await axios.post(
        "https://shadows-v2-backend.onrender.com/api/contact",
        spnsrMuseumForm
      );

      if (response.status === 200) {
        setLoading(false);

        setThankYou(true)

        setSpnsrMuseumForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setLoading(false);
        setError("Something went wrong. Please try again");
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
      setError("Failed to submit form. Please try again later");
    }
  };

  return (
    <div className="relative" ref={formCompRef}>
      {!thankYou && (
        <div
          className="
        relative  
        rounded-2xl text-center
        bg-white shadow-xl
        px-6 py-6
        xxs:px-7 xxs:py-8
        xs:px-10 xs:py-8
        sm:px-14 sm:py-10
        max-w-full sm:min-w-[500px]
        w-[90%] mx-auto min-h-[400px]
      "
        >
          {!formOnNgo && (
            <img
              src={crossPNG}
              onClick={onClose}
              className="absolute top-4 right-4 w-6 cursor-pointer hover:opacity-70 transition"
              alt="Close"
            />
          )}

          <h1 className="text-xl font-semibold text-gray-800 mb-4 xxs:text-2xl xs:text-3xl xs:mb-6">
            Contact Us
          </h1>

          <div className="flex flex-col gap-4 border-t-2 border-gray-400 pt-4 xs:pt-6 scale-105">
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm xs:text-base"
              value={spnsrMuseumForm.name}
              name="name"
              onChange={updateSpnsrForm}
              autoComplete="name"
            />
            <input
              type="text"
              placeholder="Email"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm xs:text-base"
              value={spnsrMuseumForm.email}
              name="email"
              onChange={updateSpnsrForm}
              autoComplete="email"
            />
            <input
              type="text"
              placeholder="Subject: General Inquiry / Museum Support"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm xs:text-base"
              value={spnsrMuseumForm.subject}
              name="subject"
              onChange={updateSpnsrForm}
              autoComplete="subject"
            />

            <div className="relative">
              <textarea
                placeholder="Your message"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none w-full pr-20 h-32 text-sm xs:text-base"
                value={spnsrMuseumForm.message}
                name="message"
                onChange={updateSpnsrForm}
                autoComplete="message"
              ></textarea>
              <span className="absolute bottom-2 right-3 text-xs text-gray-500">
                Char limit:{" "}
                {maxLengths.message - spnsrMuseumForm.message.length - 1}
              </span>
            </div>
          </div>

          <button
            className="px-7 py-2.5 mt-5 bg-black text-white rounded-full text-sm xs:text-lg cursor-pointer transition-all duration-300 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white focus:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
    focus:text-white
    active:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
    active:text-white"
            onClick={spsnrFormSubmit}
          >
            Submit
          </button>

          <div className="h-1 mt-2 text-sm text-red-500">
            {error && <p>Error: {error}</p>}
          </div>
        </div>
      )}

      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center z-20 overflow-hidden rounded-2xl">
          <LoaderMini />
        </div>
      )}

      {thankYou && (
        <>
          {formOnNgo ? (
            <ThankYou
              inNGO
              thankState={showThankYou}
              onClose={onClose}
              width={formSize.width}
              height={formSize.height}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <ThankYou thankState={showThankYou} onClose={onClose} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Formcomp;
