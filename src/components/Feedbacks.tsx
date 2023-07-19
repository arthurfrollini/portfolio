import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import { FaLinkedin } from 'react-icons/fa';

interface FeedbackCardProps {
  index: number;
  testimonial: string;
  name: string;
  linkedin: string;
  designation: string;
  image: string;
}

const FeedbackCard = ({
  index,
  testimonial,
  name,
  linkedin,
  designation,
  image,
}: FeedbackCardProps) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className="flex  w-full rounded-3xl  bg-black-200 p-10 md:w-[320px]"
    >
      <div className="mt-1 flex h-full min-h-[339px] flex-col justify-between">
        <div>
          <p className="text-[48px] font-black text-white">"</p>
          <p className="text-[18px] tracking-wider text-white">{testimonial}</p>
        </div>

        <div className="mt-7 flex items-center justify-between gap-1">
          <div className="flex flex-1 flex-col">
            <p className="text-[16px] font-medium text-white">
              <div className="flex items-center">
                <span className="blue-text-gradient mr-1">@</span>
                <a
                  className="flex cursor-pointer items-center underline-offset-2 hover:underline"
                  href={linkedin}
                  target="_blank"
                >
                  {name}
                  <FaLinkedin className="ml-1" />
                </a>
              </div>
            </p>
            <p className="mt-1 text-[12px] text-secondary">{designation}</p>
          </div>

          <img
            src={image}
            alt={`feedback-by-${name}`}
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 rounded-[20px] bg-black-100">
      <div
        className={`${styles.padding} min-h-[300px] rounded-2xl bg-tertiary`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');
