import { motion } from 'framer-motion';
import marvel from '../assets/marvel/marvel.jpg'

const Hero = () => {
  return (
    <motion.div className='h-[100%] w-[100%] flex justify-center relative '>
      <img
        src={marvel}
        alt="marvel"
        width='50%'
        height='50%'
        object-fit='cover'
      />
      </motion.div>
 
  );
};

export default Hero;
