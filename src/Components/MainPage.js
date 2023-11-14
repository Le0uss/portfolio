import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { FaGithub } from 'react-icons/fa';
import HoverText from "./HoverText"
import ContactButton from "./ContactButton";
import img1 from '../images/home.png'
import img2 from '../images/demo.gif'
import img3 from '../images/screenshot.png'
import img4 from '../images/360_F_597374605_tph8vB4RrkKvN2MT1gKeJUKerCR8LYu8.jpg'
import img5 from '../images/seat-select.png'
import img6 from '../images/clicker.gif'


const MainPage = () => {
    const scrollToDescription = (id) => {
      const element = document.getElementById(`description-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  
    return (
      <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
        <div>
          <span className="block mb-4 text-xs md:text-sm text-black font-medium">
            Better projects every day
          </span>
          <HoverText className="text-4xl md:text-6xl font-semibold" />
          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
            I'm a dedicated web developer always willing to hone my skills in both front-end and back-end development. 
            My journey in web development is marked by daily commitment to projects, where I'm improving not only my technical 
            skills but also gaining a deeper understanding of the nuances of web applications.
          </p>
          <ContactButton className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95"/>
        </div>
        <ShuffleGrid scrollToDescription={scrollToDescription} />
        <DescriptionGrid />
      </section>
    );
  };

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
    {
      id: 1,
      src: img1,
      description: (
        <div className="flex h-full">
          <img src={img1} alt="Project Description" className="w-1/2 h-auto rounded-lg" />
          <div className="flex-grow flex flex-col justify-between ml-4">
            <p>React frontend with server backend integration for web development. Emphasizes dual-terminal use and ease of learning.</p>
            <div className="text-right">
              <a href="https://github.com/Le0uss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-end">
                <FaGithub /> Check out my Project
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      src: img2,
      description: (
        <div className="flex h-full">
          <img src={img2} alt="Seat Booking App" className="w-1/2 h-auto rounded-lg" />
          <div className="flex-grow flex flex-col justify-between ml-4">
            <p>React and Node.js seat booking app. Integrates UI and server backend, focusing on error handling and server operations.</p>
            <div className="text-right">
              <a href="https://github.com/Le0uss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-end">
                <FaGithub /> Check out my Project
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      src: img3,
      description: (
        <div className="flex h-full">
          <img src={img3} alt="Nyan Cat" className="w-1/2 h-auto rounded-lg" />
          <div className="flex-grow flex flex-col justify-between ml-4">
            <p>JavaScript OOP game for understanding OOP concepts. Players navigate as cheeseburgers avoiding Nyan Cats, focusing on debugging and customization.</p>
            <div className="text-right">
              <a href="https://github.com/Le0uss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-end">
                <FaGithub /> Check out my Project
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      src: img4,
      description: (
        <div className="flex h-full">
          <img src={img4} alt="Corner Cafe API Project" className="w-1/2 h-auto rounded-lg" />
          <div className="flex-grow flex flex-col justify-between ml-4">
            <p>RESTful API design for a cafe, covering endpoint creation and data management. Features GET, POST, DELETE operations and UUID use.</p>
            <div className="text-right">
              <a href="https://github.com/Le0uss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-end">
                <FaGithub /> Check out my Project
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      src: img5,
      description: (
        <div className="flex h-full">
          <img src={img5} alt="Slingshot Airlines Seat-Booking App" className="w-1/2 h-auto rounded-lg" />
          <div className="flex-grow flex flex-col justify-between ml-4">
            <p>Full-stack seat-booking system with frontend-backend integration. Features flight selection, reservation management, and MongoDB database integration.</p>
            <div className="text-right">
              <a href="https://github.com/Le0uss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-end">
                <FaGithub /> Check out my Project
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
        id: 6,
        src: img6,
        description: (
          <div className="flex h-full">
            <img src={img6} alt="Idle Game Project" className="w-1/2 h-auto rounded-lg" />
            <div className="flex-grow flex flex-col justify-between ml-4">
              <p>Idle game clone of Cookie Clicker. Focuses on simple but addictive gameplay mechanics, including resource generation and upgrades.</p>
              <div className="text-right">
                <a href="https://github.com/Le0uss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-end">
                  <FaGithub /> Check out my Project
                </a>
              </div>
            </div>
          </div>
        ),
      }
      
  ];
  

const generateSquares = (scrollToDescription) => {
    return shuffle(squareData).map((sq) => {
      return (
        <motion.div
          key={sq.id}
          layout
          transition={{ duration: 1.5, type: "spring" }}
          className="w-full h-full cursor-pointer bg-cover bg-center"
          style={{ backgroundImage: `url(${sq.src})` }}
          onClick={() => scrollToDescription(sq.id)}
        />
      );
    });
  };
  
  const ShuffleGrid = ({ scrollToDescription }) => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares(scrollToDescription));
  
    const shuffleSquares = useCallback(() => {
      setSquares(generateSquares(scrollToDescription));
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    }, [scrollToDescription]); 
  
    useEffect(() => {
      shuffleSquares();
      return () => clearTimeout(timeoutRef.current);
    }, [shuffleSquares]); 
  
    return (
      <div className="grid grid-cols-2 grid-rows-3 gap-4 md:gap-6 lg:gap-8 h-[600px]">
        {squares}
      </div>
    );
  };
  
  const DescriptionGrid = () => {
    return (
      <div className="mt-8 md:mt-12 grid grid-cols-1 gap-6">
        {squareData.map((item) => (
          <div key={item.id} id={`description-${item.id}`} className="bg-white shadow-lg p-4 rounded-lg">
            <div className="text-gray-700 text-sm md:text-base">{item.description}</div>
          </div>
        ))}
      </div>
    );
  };  
  
   

export default MainPage;