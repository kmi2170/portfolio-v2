import { motion } from "framer-motion";

const MotionWrapper = <P extends {}>(Component: React.ComponentType<P>) => {
  return function Wrapper(props: P) {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0.25, 1] }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
      >
        <Component {...props} />
      </motion.div>
    );
  };
};

export default MotionWrapper;
