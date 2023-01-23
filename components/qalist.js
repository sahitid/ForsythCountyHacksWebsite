import styles from "../styles/Home.module.css";
import {motion, useScroll} from "framer-motion";
import {useRef} from "react";


export default function QAlist() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll();
  return (
    <div className={styles.section} ref={scrollRef} style={{ overflow: "scroll" }}>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: false, amount: 0.7}}
      >
        <h1>motion test</h1>
      </motion.div>
        <div className={styles.faq}>
          <h1>FAQ</h1>
        </div>
        <div className={styles.faq}>
          <motion.ul
          style={{ scaleX: scrollYProgress }}
          >
            <motion.li>
              Is there a registration fee?
              <br/>
              nope! forsyth county hacks is free to participate in!
            </motion.li>
            <motion.li>
              Who's eligible to participate?
              <br/>
              any student who identifies as a high schooler can attend and participate. coding experience does not matter!
            </motion.li>
            <motion.li>
              I'm only a beginner at coding?
              <br/>
              even if you're just a coding beginner, there will be plenty of workshops and opportunities for you to learn throughout the day
            </motion.li>
            <motion.li>
              What is a hackathon?
              <br/>
              a hackathon is an event for like-minded programmers to come together, collaborate, win prizes, compete, learn, and more!
            </motion.li>
            <motion.li>
              How long is Forsyth Hacks?
              <br/>
              the event will be a motion.ull day long (from 10:15 AM to 5:30 PM)
            </motion.li>
            <motion.li>
              Will there be prizes?
              <br/>
              yes! there will be many fun prizes for everyone. no one will go home empty handed.
            </motion.li>
            <motion.li>
              How big should teams be?
              <br/>
              teams can be anywhere around 1-4 people. don't worry if you don't have a team by the time you register! you can meet new people and create a team the day of the hackathon!
            </motion.li>
            <motion.li>
              What should I bring?
              <br/>
              we recommend you bring the following:
              <p>      - snack</p>
              <p>      - laptop</p>
              <p>      - chargers</p>
            </motion.li>
          </motion.ul>
          <hr/>
          <p>food & drink will be provided, but we cannot guarantee access to a computer for everyone.</p>
        </div>
    </div>
  );
}