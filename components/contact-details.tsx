import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactDetails() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm('service_upebzc5', 'template_crtzjqn', formRef.current, {
        publicKey: '-oynxJghvLBo4ltUf',
      })
      .then(
        () => {
          alert('Message sent successfully!');
          formRef.current?.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <div
      data-aos="zoom-in-down"
      data-aos-duration="200"
      data-aos-delay="200"
      data-aos-easing="ease-in-cubic"
      className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8"
    >
      <div className="space-y-4 mb-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#00CAEE] text-center">
          Contact
        </h1>
        <p className="text-sm sm:text-base text-gray-300 text-center mt-1">
          Feel free to reach out to me for any questions or opportunities!
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="mx-auto w-full max-w-2xl flex flex-col bg-[#14151D] py-10 rounded-xl gap-y-10 justify-center px-5"
      >
        <h1 className="text-white font-bold text-3xl">Email Me 🚀</h1>

        <div>
          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            className="border border-gray-300 focus:border-[#00CAEE] focus:shadow-costom-shadow focus:outline-none bg-transparent w-full p-3 text-xl rounded text-gray-300"
          />
        </div>

        <div>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="border border-gray-300 focus:border-[#00CAEE] focus:shadow-costom-shadow focus:outline-none bg-transparent w-full p-3 text-xl rounded text-gray-300"
          />
        </div>

        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="border border-gray-300 text-gray-300 focus:border-[#00CAEE] focus:shadow-costom-shadow focus:outline-none bg-transparent w-full p-3 text-xl rounded"
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message"
            className="border border-gray-300 text-gray-300 focus:border-[#00CAEE] focus:shadow-costom-shadow focus:outline-none bg-transparent w-full p-3 text-xl rounded h-20"
          ></textarea>
        </div>

        <button
          type="submit"
          className="border border-[#00E0FF] px-8 text-lg p-3 rounded font-medium text-gray-700 hover:text-slate-900 bg-gradient-to-r hover:bg-gradient-to-r from-emerald-300 to-sky-400 transition-all duration-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactDetails;
