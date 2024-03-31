import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
    const [state, handleSubmit] = useForm("meqyrgwa");
  if (state.succeeded) {
      return <p className='text-white mx-auto text-center text-3xl font-semibold'>Thank you for contacting us</p>;
  }

    return (
        <div className='max-w-[1200px] mx-auto bg-black sm:py-10 p-5 my-10 py-10' id="contact">
            <div className='text-center'>
                <h2 className="text-4xl font-bold leading-tight primary-color">Contact Me</h2>
            </div>
            <div className="max-w-[800px] mx-auto">
                <div className='mt-6 bg-[#161616] rounded-xl'>
                    <div className='p-10'>
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                                <div>
                                    <div className='mt-2.5'>
                                        <input type="text" name='name' placeholder='Enter Your Name' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' required/>
                                        <ValidationError prefix="Name" field="name" errors={state.errors}/>
                                    </div>
                                </div>
                                <div>
                                <div className='mt-2.5'>
                                        <input type="email" name='email' placeholder='Enter Your Email-ID' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' required/>
                                        <ValidationError prefix="Email" field="email" errors={state.errors}/>
                                    </div>
                                </div>
                                <div>
                                <div className='mt-2.5'>
                                        <input type="tel" name='contact' placeholder='Enter Your Contact No' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' required/>
                                        <ValidationError prefix="Contact" field="contact" errors={state.errors}/>
                                    </div>
                                </div>
                                <div>
                                <div className='mt-2.5'>
                                        <input type="text" name='subject' placeholder='Enter Your Subject' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' required/>
                                        <ValidationError prefix="Subject" field="subject" errors={state.errors}/>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                <div className='mt-2.5'>
                                        <textarea name='message' id='' placeholder='Enter Your Message Here..' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' rows='4' required></textarea>
                                        <ValidationError prefix="Message" field="message" errors={state.errors}/>
                                    </div>
                                </div>
                                <div className='sm:col-span-2'>
                                    <button type='submit' className='text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md uppercase' disabled={state.submitting}>Submit Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;