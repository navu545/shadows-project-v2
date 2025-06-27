import { useState } from "react";
import axios from "axios";
import ThankYou from "./Thankyou";
import Loader from "./Loader/Loader";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const maxLengths: Record<string, number> = {
  name: 50,
  email: 100,
  subject: 100,
  message: 450,
};

const Formcomp = () => {
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
        setThankYou(true);

        setTimeout(() => {
          setThankYou(true);
        }, 100);
        
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
    <div>
      {!thankYou && (
        <div className="rounded-2xl text-center px-10 py-8 min-w-lg mx-auto shadow-xl bg-white relative min-h-[400px]">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">
            Contact Us
          </h1>

          <div className="flex flex-col gap-4 border-t-2 border-gray-400 pt-6">
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              value={spnsrMuseumForm.name}
              name="name"
              onChange={updateSpnsrForm}
              autoComplete="name"
            />
            <input
              type="text"
              placeholder="Email"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              value={spnsrMuseumForm.email}
              name="email"
              onChange={updateSpnsrForm}
              autoComplete="email"
            />
            <input
              type="text"
              placeholder="Subject: General Inquiry / Museum Support"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              value={spnsrMuseumForm.subject}
              name="subject"
              onChange={updateSpnsrForm}
              autoComplete="subject"
            />

            <div className="relative">
              <textarea
                placeholder="Your message"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none w-full pr-20 h-32"
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
            className="px-10 py-3 mt-5 bg-gray-800 text-white rounded-full text-sm text-lg cursor-pointer transition-all duration-300 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white"
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
          <Loader />
        </div>
      )}
      {thankYou && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <ThankYou thankState={showThankYou} />
        </div>
      )}
    </div>
  );
};

export default Formcomp;
