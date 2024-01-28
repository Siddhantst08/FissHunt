import React from 'react'
const Contact = () => {
    return (
        <div>
            <div className="m-4 p-4 border-2 shadow-slate-400 shadow-lg">
                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">About Us</h2>
                    <p className="text-gray-700">
                        Welcome to CryptoCoin, your trusted source for all things related to cryptocurrency. We are dedicated to providing you with accurate and up-to-date information, news, and resources in the ever-evolving world of digital currencies. At CryptoCoin, we believe in transparency, security, and innovation. Our team of experts is passionate about blockchain technology and its potential to revolutionize the financial landscape.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                    <p className="text-gray-700">
                        If you have any questions, concerns, or feedback, please feel free to reach out to us. We value your input and are here to assist you.
                    </p>

                    <div className="mb-4">
                        <p className="text-gray-800">
                            <strong>Email:</strong> mayank2000joshi@gmail.com
                        </p>
                        <p className="text-gray-800">
                            <strong>Phone:</strong> +91 6396877650
                        </p>
                        {/* Add additional contact details as needed */}
                    </div>

                    <p className="text-gray-700">
                        Alternatively, you can use the contact form below to send us a message:
                    </p>

                    {/* Contact Form */}
                    <form className="mb-4">
                        {/* Include necessary form fields (e.g., name, email, message) */}
                        <label className="block text-gray-800 mb-1" htmlFor="name">Your Name:</label>
                        <input className="w-full border border-gray-300 p-2 mb-2" type="text" id="name" name="name" required />

                        <label className="block text-gray-800 mb-1" htmlFor="email">Your Email:</label>
                        <input className="w-full border border-gray-300 p-2 mb-2" type="email" id="email" name="email" required />

                        <label className="block text-gray-800 mb-1" htmlFor="message">Your Message:</label>
                        <textarea className="w-full border border-gray-300 p-2 mb-2" id="message" name="message" rows="4" required></textarea>

                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" type="submit" method="post">Submit</button>
                    </form>
                </section>
            </div>


        </div>
    )
}

export default Contact
