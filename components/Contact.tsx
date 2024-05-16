'use client';

import React from 'react';
import { sendEmail } from '@/helpers/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  return (
    <section className='flex justify-center flex-col items-center h-screen bg-gray-100'>
      <div
        id='contact'
        className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      >
        <h2 className='text-3xl font-medium capitalize mb-8 text-center'>
          Contact me
        </h2>

        <p className='text-gray-700 -mt-6 dark:text-white/80'>
          Please contact us through this form.
        </p>

        <form
          className='mt-10 flex flex-col dark:text-black'
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success('Email sent successfully!');
          }}
        >
          <input
            className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
            name='senderEmail'
            type='email'
            required
            maxLength={500}
            placeholder='Your email'
          />
          <textarea
            className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
            name='message'
            placeholder='Your message'
            required
            maxLength={5000}
          />
          <SubmitBtn />
        </form>
      </div>{' '}
    </section>
  );
}
