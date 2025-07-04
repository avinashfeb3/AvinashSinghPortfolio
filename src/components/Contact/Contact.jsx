import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("meqyrgwa");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        contact: ''
    });
    const [showSuccess, setShowSuccess] = useState(false);

    const validateName = (name) => {
        const regex = /^[a-zA-Z\s]*$/;
        if (!regex.test(name)) {
            return "Name should contain only alphabets";
        }
        return "";
    };

    const validateContact = (contact) => {
        const regex = /^\d{10}$/;
        if (!regex.test(contact)) {
            return "Phone number should be 10 digits";
        }
        return "";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Validate on change
        if (name === 'name') {
            setErrors(prev => ({
                ...prev,
                name: validateName(value)
            }));
        } else if (name === 'contact') {
            setErrors(prev => ({
                ...prev,
                contact: validateContact(value)
            }));
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        
        // Validate before submission
        const nameError = validateName(formData.name);
        const contactError = validateContact(formData.contact);
        
        if (nameError || contactError) {
            setErrors({
                name: nameError,
                contact: contactError
            });
            return;
        }

        // Proceed with form submission
        await handleSubmit(e);
        
        // Show success message and reset form
        if (state.succeeded) {
            setShowSuccess(true);
            setFormData({
                name: '',
                email: '',
                contact: '',
                subject: '',
                message: ''
            });
            
            // Hide success message after 3 seconds
            setTimeout(() => {
                setShowSuccess(false);
            }, 3000);
        }
    };

    return (
        <div className='max-w-[1200px] mx-auto bg-black sm:py-10 p-5 my-10 py-10' id="contact">
            <div className='text-center'>
                <h2 className="text-4xl font-bold leading-tight primary-color">Contact Me</h2>
            </div>
            <div className="max-w-[800px] mx-auto">
                <div className='mt-6 bg-[#161616] rounded-xl'>
                    <div className='p-10'>
                        {showSuccess && (
                            <div className="mb-6 p-4 bg-green-800 text-white rounded-md">
                                Thank you for contacting us!
                            </div>
                        )}
                        <form onSubmit={onSubmit}>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                                <div>
                                    <div className='mt-2.5'>
                                        <input 
                                            type="text" 
                                            name='name' 
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder='Enter Your Name' 
                                            className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' 
                                            required
                                        />
                                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                        <ValidationError prefix="Name" field="name" errors={state.errors}/>
                                    </div>
                                </div>
                                <div>
                                    <div className='mt-2.5'>
                                        <input 
                                            type="email" 
                                            name='email' 
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder='Enter Your Email-ID' 
                                            className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' 
                                            required
                                        />
                                        <ValidationError prefix="Email" field="email" errors={state.errors}/>
                                    </div>
                                </div>
                                <div>
                                    <div className='mt-2.5'>
                                        <input 
                                            type="tel" 
                                            name='contact' 
                                            value={formData.contact}
                                            onChange={handleChange}
                                            placeholder='Enter Your Contact No' 
                                            className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' 
                                            required
                                        />
                                        {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
                                        <ValidationError prefix="Contact" field="contact" errors={state.errors}/>
                                    </div>
                                </div>
                                <div>
                                    <div className='mt-2.5'>
                                        <input 
                                            type="text" 
                                            name='subject' 
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder='Enter Your Subject' 
                                            className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' 
                                            required
                                        />
                                        <ValidationError prefix="Subject" field="subject" errors={state.errors}/>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className='mt-2.5'>
                                        <textarea 
                                            name='message' 
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder='Enter Your Message Here..' 
                                            className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' 
                                            rows='4' 
                                            required
                                        ></textarea>
                                        <ValidationError prefix="Message" field="message" errors={state.errors}/>
                                    </div>
                                </div>
                                <div className='sm:col-span-2'>
                                    <button 
                                        type='submit' 
                                        className='text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md uppercase' 
                                        disabled={state.submitting}
                                    >
                                        Submit Now
                                    </button>
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