import React from 'react';

const Contact = () => {
    return (
        <section>
          <div className="bg-graybg h-32 flex items-center justify-center rounded-2xl">
        <h1 className="text-center font-bold text-3xl ">Contact</h1>
      </div>
            <div className="bg-gray-100 w-full min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 py-8 pt-8 w-[80%] md:w-[70%] lg:w-[50%]">
        <div className="mb-4">
          <h1 className="text-gray-800 text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600 text-sm">Feel free to get in touch with us!</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            id="message"
            placeholder="Your message"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  bg-green mt-8 text-sm text-white"
            type="button"
          >
            Send
          </button>
        </div>
      </div>
    </div>
        </section>
    );
};

export default Contact;