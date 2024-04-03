import React from 'react';
import { motion } from 'framer-motion';

function ContactForm() {

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = 'mailto:masudulalam972@gmail.com';
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto"
    >
      <div className="flex flex-wrap mb-6">
        <div className="w-full px-3 ">
          <label className="block uppercase tracking-wide text-[#beb3b0] text-xs font-bold mb-2" htmlFor="name">
            Name
          </label>
          <motion.input
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="appearance-none block w-full bg-gray-300 text-[#4e332d] border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 transition duration-300"
            id="name" type="text" placeholder="Your Name"
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-[#beb3b0] text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <motion.input
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="appearance-none block w-full bg-gray-300 text-[#4e332d] border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 transition duration-300"
            id="email" type="email" placeholder="example@example.com"
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-[#beb3b0] text-xs font-bold mb-2" htmlFor="message">
            Message
          </label>
          <motion.textarea
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="resize-none appearance-none block w-full bg-gray-300 text-[#4e332d] border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 transition duration-300"
            id="message" placeholder="Your message"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 hover:bg-[#704264]  w-32 focus:border focus:border-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          type="submit"
        >
          Send
        </motion.button>
      </div>
    </motion.form>
  );
}

export default ContactForm;
