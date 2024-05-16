import Contact from '@/components/Contact';

//comment for redeployment

const page = () => {
  return <Contact />;
};
export default page;

// import { useForm } from 'react-hook-form';

// const Contact = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <>
//       <div className='flex justify-center flex-col items-center h-screen bg-gray-100'>
//         {' '}
//         <p className='mb-4  p-4 break-words'>
//           If you have any questions, concerns, or feedback, please feel free to
//           reach out to us using the contact form below. We value your privacy
//           and will handle your data with care. For more information on how we
//           handle your data, please review our{' '}
//           <a href='/privacy-policy' className='text-blue-600 underline'>
//             Privacy Policy
//           </a>
//           .
//         </p>
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className='w-96 p-8 bg-white shadow-lg rounded-lg'
//         >
//           <h1 className='text-2xl font-bold mb-4 text-center'>
//             Send us a message
//           </h1>
//           <div className='mb-4'>
//             <label
//               htmlFor='name'
//               className='block text-sm font-medium text-gray-700'
//             >
//               Name
//             </label>
//             <input
//               id='name'
//               type='text'
//               {...register('name', {
//                 required: true,
//               })}
//               className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
//             />

//             {errors.name && (
//               <p className='text-sm text-red-600'>Name is required</p>
//             )}
//           </div>
//           <div className='mb-4'>
//             <label
//               htmlFor='email'
//               className='block text-sm font-medium text-gray-700'
//             >
//               Email
//             </label>
//             <input
//               id='email'
//               type='email'
//               {...register('email', { required: true })}
//               className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
//             />
//             {errors.email && (
//               <p className='text-sm text-red-600'>Email is required</p>
//             )}
//           </div>

//           <div className='mb-4'>
//             <label
//               htmlFor='message'
//               className='block text-sm font-medium text-gray-700'
//             >
//               Message
//             </label>
//             <textarea
//               id='message'
//               {...register('message', { maxLength: 300, required: true })}
//               className='mt-1 block h-40 w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
//             />
//             {errors.message && (
//               <p className='text-sm text-red-600'>Maximum 300 characters</p>
//             )}
//           </div>
//           <button
//             type='submit'
//             className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-offset-gray-100 focus:ring-indigo-500'
//           >
//             Submit
//           </button>
//         </form>
//       </div>{' '}
//     </>
//   );
// };

// export default Contact;
