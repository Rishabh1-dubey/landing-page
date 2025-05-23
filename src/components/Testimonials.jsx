import { feedback } from "../constants";
import styles from "../style";
import Feedback from "./Feedback";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>

    

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          What people are{" "}
          <br
            className="sm:block hidder
        "
          />
          saying about us
        </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planer.
        </p>
      </div>
      </div>
      {/* ------------------------ feedback card------------------ */}
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {
          feedback.map((card)=>(
            <Feedback key={card.id} {...card}/>
          ))
        }
      </div>
    </section>
  );
};

export default Testimonials;
