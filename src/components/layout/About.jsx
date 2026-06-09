import { motion } from "framer-motion";
import bhan from "@/components/assets/images/slides/bha-about.jpg";
export default function About() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="text-8xl font-bold text-left ml-20 mt-20 mb-12">
          THE STORY OF BHAAN
        </h1>
        <div className="grid grid-cols-2 p-5 ">
          <div>
            <img
              src={bhan}
              className="mx-auto ml-20 rounded-4xl overflow-hidden object-cover p-2 aspect-auto"
              alt="Bhaan About"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <p className="text-2xl text-zinc-700 leading-relaxed font-bold">
              Bhaan is a theatre collective and cultural publication dedicated
              to fostering artistic expression, meaningful dialogue, and
              contemporary storytelling. Through performances, publications,
              workshops, and community engagement, we seek to create spaces
              where creativity and culture can thrive.
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
}
