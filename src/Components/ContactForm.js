import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';


emailjs.init('PjQa-I7WHUNVQp8jU'); 

const ContactForm = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    const sendEmail = (event) => {
      event.preventDefault();
      console.log("hello world");
  
      emailjs.sendForm("service_mgffp6t", 'template_fbrvsgv', event.target)
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    };
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <form className="bg-white w-3/4 lg:w-1/2 xl:w-1/3 p-8 rounded-lg shadow-lg flex flex-col items-center" onSubmit={sendEmail}>
          <input name="user_name" className="mb-4 w-full px-3 py-2 border rounded" type="text" placeholder="Your Name" />
          <input name="user_email" className="mb-4 w-full px-3 py-2 border rounded" type="email" placeholder="Your Email" />
          <textarea name="message" className="mb-4 w-full px-3 py-2 border rounded" placeholder="Your Message" rows="3"></textarea>
          
          <div className="flex-grow"></div> 
          
          <div className="flex justify-between w-full">
            <button type="button" onClick={onClose} className="text-left">Close</button>
            <div className="flex space-x-2">
              <a href='your-linkedin-url' target='_blank' rel='noopener noreferrer' className="text-lg">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href='your-github-url' target='_blank' rel='noopener noreferrer' className="text-lg">
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
  
  