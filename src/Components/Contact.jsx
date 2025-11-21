import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''

  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')


    emailjs.send(
      'service_vxw9ltj',
      'template_06lkx9u',
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
      '-gBOVOwUnv2FheK0o'
    )
      .then(() => {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <div id='contact' className='h-full bg-white py-16'>
      <div className='h-auto md:h-[600px] md:w-[1000px] md:max-w-[1000px] mx-auto bg-[#0D0630] py-6 px-4'>
        <div className='font-black'>
          <p className='font-extralight text-center mx-auto w-full md:w-[50%] md:pt-4 text-white'>
            Alternatively, fill out the form and we'll be in touch soon!
          </p>
          <h1 className='font-medium py-4 text-center text-3xl mx-auto w-full md:w-[50%] text-white'>
            How can we help you?
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='grid md:grid-cols-2 gap-2 px-8 md:px-16'>
            <input
              className='p-4 bg-white mt-2 rounded-md '
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Name'
              required
            />
            <input
              className='p-4 bg-white mt-2 rounded-md'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email Address'
              required
            />
          </div>

          <div className='grid flex-col-1 px-8 md:px-16 rounded-md'>
            <input
              className='p-4 bg-white mt-2 rounded-md'
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Phone Number'
            />
            <input
              className='p-4 bg-white mt-2 rounded-md'
              type='text'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              placeholder='Subject'
              required
            />
            <textarea
              className='p-4 bg-white mt-2 rounded-md min-h-[100px] '
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Message'
              required
            />

            <button
              type='submit'
              disabled={status === 'sending'}
              className='p-4 bg-[#F4D35E] text-[#1a2f5a] w-[120px] mt-4 mx-auto rounded-md hover:bg-[#1a2f5a] transition-colors disabled:opacity-50'
            >
              {status === 'sending' ? 'Sending...' : 'Submit'}
            </button>

            {status === 'success' && (
              <p className='text-white text-center mt-4 font-medium'>
                ✓ Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className='text-red-300 text-center mt-4 font-medium'>
                ✗ Failed to send. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact