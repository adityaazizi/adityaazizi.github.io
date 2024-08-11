import { motion } from "framer-motion";
import pythonLogo from "../assets/python.png";
import cppLogo from "../assets/cpp.png";
import tensorflowLogo from "../assets/tensorflow.png";
import pytorchLogo from "../assets/pytorch.png";
import opencvLogo from "../assets/opencv.png";
import githubLogo from "../assets/github.png";
import dockerLogo from "../assets/docker.png";
import gcpLogo from "../assets/gcp.png";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technology Stack
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={cppLogo}
            alt="Python Logo"
            className="h-16"
            style={{ backgroundColor: "transparent" }}
          />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={pythonLogo}
            alt="Python Logo"
            className="h-16"
            style={{ backgroundColor: "transparent" }}
          />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={pytorchLogo}
            alt="Python Logo"
            className="h-16"
            style={{ backgroundColor: "transparent" }}
          />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={tensorflowLogo}
            alt="PyTorch Logo"
            className="h-16"
            style={{ backgroundColor: "transparent" }}
          />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={opencvLogo}
            alt="TensorFlow Logo"
            className="h-16"
            style={{ backgroundColor: "transparent" }}
          />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={githubLogo}
            alt="OpenCV Logo"
            className="h-16"
            style={{ backgroundColor: "transparent" }}
          />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={dockerLogo}
            alt="Langchain Logo"
            className="h-16"
            style={{ backgroundColor: "transparent" }}
          />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={gcpLogo}
            alt="Pandas Logo"
            className="h-16"
            style={{ backgroundColor: "transparent" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
