import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({
  index,
  title,
  icon,
}: {
  index: number;
  title: string;
  icon: string;
}) => {
  return (
    <Tilt
      className="w-full md:w-[250px]"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
      >
        <div
          className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px]
          bg-tertiary px-12 py-5"
        >
          <img src={icon} alt={title} className="h-16 w-16 object-contain" />
          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        I'm a FrontEnd software engineer focused on the JavaScript ecosystem
        with experience in TypeScript, expertise developing great user
        interfaces with React, experience using frameworks like Next.js, and
        also with some great Node.js background. Been lately putting some hours
        on the Web3 development and creating 3D visuals with React Three Fiber.
        I'm a quick learner and collaborate closely with clients to create
        efficient, scalable, and user-friendly solutions that solve real-world
        problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
