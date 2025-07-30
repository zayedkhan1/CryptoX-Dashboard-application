import React from 'react';
import { useState } from "react";
import SideBar from '../homecomponent/SideBar';
import Navbar from '../MainDashboardPages/Navbar';

  

const Support = () => {
    const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
    agree: false,
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };
    return (

      <div className='flex'>
        <SideBar></SideBar>
        <div className='w-full mx-auto'>
            <Navbar></Navbar>
            <div className='max-w-6xl mx-auto'>
                  <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-purple-600 text-2xl">📧</span>
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
          <p className="text-gray-600">
            Have a question or just want to know more? Feel free to reach out to us.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-sm text-gray-700 mb-4">
            You will receive a response within 24 hours of submission.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={form.surname}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="name@mail.com"
            value={form.email}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 mt-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 mt-4 w-full h-24 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div className="flex items-center mt-3 text-sm">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mr-2"
            />
            <label>
              I agree with <a href="#" className="text-purple-600">Terms & Conditions</a>.
            </label>
          </div>

          <button
            className="w-full mt-4 bg-gray-200 text-gray-600 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Send a Message
          </button>
          <button
            className="w-full mt-3 bg-gray-100 text-gray-700 font-medium py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Book a Meeting
          </button>
        </div>
      </div>

      {/* Live Chat Section */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-purple-600 text-2xl">💬</span>
            <h2 className="text-2xl font-bold">Live Chat</h2>
          </div>
          <p className="text-gray-600">
            Don’t have time to wait for the answer? Chat with us now.
          </p>
        </div>

        <div className="bg-purple-600 text-white rounded-xl p-6 shadow-lg">
          <p className="font-semibold">Chatbot</p>
          <h3 className="text-lg mt-2">Chat with us now</h3>
        </div>
      </div>
    </div>
            </div>

        </div>

      </div>
    );
};

export default Support;