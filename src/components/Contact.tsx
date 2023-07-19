import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = e;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_xqx2g0i',
        'template_rjkazd6',
        {
          from_name: form.name,
          to_name: 'Arthur',
          from_email: form.email,
          to_email: 'arthur.frollini@gmail.com',
          message: form.message,
        },
        '__dj_tsQJ34JyyJ8x'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you! I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong.');
        }
      );
  };

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] rounded-2xl bg-black-100 p-8"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-whtie mb-4 font-medium">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary focus:outline-white"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-whtie mb-4 font-medium">Your Email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary focus:outline-white"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-whtie mb-4 font-medium">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary focus:outline-white"
            />
          </label>

          <button
            type="submit"
            className="w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none hover:outline-white"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
