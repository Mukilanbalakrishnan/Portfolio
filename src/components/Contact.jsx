import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";
import Footer from "./Footer";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { name, email, message } = form;

  //   if (!name.trim() || !email.trim() || !message.trim()) {
  //     toast.error("Please fill in all fields", {
  //       position: "bottom-right",
  //     });
  //     return;
  //   }

  //   setLoading(true);
  //   setTimeout(() => {
  //     toast.success("Message prepared successfully! (No email setup yet)", {
  //       position: "bottom-right",
  //     });
  //     setForm({ name: "", email: "", message: "" });
  //     setLoading(false);
  //   }, 1000);
  // };

  return (
    <div className="relative z-0 bg-black w-screen h-full mt-12">
      <div className="text-white contact overflow-x-hidden pt-12 mt-8" id="contact">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl"
        >
          <p className="font-light">REACH OUT TO ME</p>
          <h2 className="text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500">
            Contact.
          </h2>
          <form action="https://getform.io/f/allyvoya" method="POST" className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Ex: abc@gmail.com"
                className="py-4 px-6 rounded-lg font-medium bg-gray-900"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Do you have anything to say?"
                className="py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900"
                required
              />
            </label>
            <div className="pb-16 px-6 sm:px-16">  {/* <-- Add padding-bottom */}
              {/* <form onSubmit={handleSubmit}> */}
              {/* Input fields */}
              <button
                type="submit"
                className="mt-6 px-6 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-purple-700 to-pink-600 hover:scale-105 transition-transform"
              >
                Send
              </button>
              {/* </form> */}
            </div>

          </form>
        </motion.div>
        <ToastContainer />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
