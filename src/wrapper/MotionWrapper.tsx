import { motion } from "framer-motion";

const MotionWrapper = <P extends object>(Component: React.ComponentType<P>) => {
  const WrappedComponent = (props: P) => (
    <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: 0.75, ease: "easeInOut" }}>
      <Component {...props} />
    </motion.div>
  );

  return WrappedComponent;
};

export default MotionWrapper;
