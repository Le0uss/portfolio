import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

emailjs.init('PjQa-I7WHUNVQp8jU'); 

const ContactForm = ({ isOpen, onClose }) => {

  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);


    if (!isOpen) return null;


    const sendEmail = (event) => {
      event.preventDefault();
      setErrorMessage(''); // Reset the error message on new submission attempt

      const userEmail = event.target.user_email.value;
      const message = event.target.message.value;

      if (!userEmail.trim() || !message.trim()) {
        setErrorMessage('Email and message are required.');
        return;
      }

      emailjs.sendForm("service_mgffp6t", 'template_fbrvsgv', event.target)
        .then((result) => {
          console.log(result.text);
          setShowSuccessPopup(true); // Show success popup
          setTimeout(() => {
            setShowSuccessPopup(false); // Hide popup after some time
            onClose(); // Close the form
          }, 1000);
        }, (error) => {
          console.log(error.text);
        });
    };

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <AnimatePresence>
  {showSuccessPopup && (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="fixed top-5 left-3/5 transform -translate-x-1/2 px-6 py-4 bg-black text-white rounded-lg shadow-lg"
    >
      Message sent successfully!
    </motion.div>
  )}
</AnimatePresence>
        <form className="bg-white w-3/4 lg:w-1/2 xl:w-1/3 p-8 rounded-lg shadow-lg flex flex-col items-center" onSubmit={sendEmail}>
          <input name="user_name" className="mb-4 w-full px-3 py-2 border rounded" type="text" placeholder="Your Name" />
          <input name="user_email" className="mb-4 w-full px-3 py-2 border rounded" type="email" placeholder="Your Email" />
          <textarea name="message" className="mb-4 w-full px-3 py-2 border rounded" placeholder="Your Message" rows="3"></textarea>
          
          {errorMessage && <div className="text-red-500 text-sm mb-4">{errorMessage}</div>}

          <div className="flex-grow"></div>
          
          <div className="flex justify-between w-full">
  <button type="button" onClick={onClose} className="text-left">Close</button>
  <div className="flex space-x-2">
    <a href='https://www.linkedin.com/in/ossama-tenessi-00a90a29b/' target='_blank' rel='noopener noreferrer' className="text-3xl"> {/* Increased size to 2xl */}
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href='https://github.com/Le0uss' target='_blank' rel='noopener noreferrer' className="text-3xl"> {/* Increased size to 2xl */}
      <FontAwesomeIcon icon={faGithub} />
    </a>
  </div>
</div>

          <button className="bg-gray-500 text-white active:bg-grey-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-gray-700 outline-none focus:outline-none mr-1 mb-1 mt-4" type="submit"> Send Message </button>
        </form>
      </div>
    );
};

export default ContactForm;