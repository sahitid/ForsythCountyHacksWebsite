import styles from "../styles/Home.module.css";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";



export default function QAlist() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const variants = {
    visible: {
      opacity: 1,
      marginLeft: 0,
    },
    hidden: {
      opacity: 0,
      marginLeft: -50,
    }
  }

  return (
    <div className={styles.section} ref={scrollRef}>
        <motion.div
          className={styles.faq}
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.9, margin: "20px"}}
          variants={variants}>
          <motion.h1>FAQ</motion.h1>
        </motion.div>
        <div className={styles.faq}>
          <motion.ul>
            {appearli(
              <p>Is there a registration fee?
              <br/>
              nope! forsyth county hacks is free to participate in!
              </p>)}
            {appearli(
              <p>Who's eligible to participate?
              <br/>
              any student who identifies as a high schooler can attend and participate. coding experience does not matter!
              </p>)}
            {appearli(
              <p>I'm only a beginner at coding?
              <br/>
              even if you're just a coding beginner, there will be plenty of workshops and opportunities for you to learn throughout the day
              </p>)}
            {appearli(
              <p>What is a hackathon?
              <br/>
              a hackathon is an event for like-minded programmers to come together, collaborate, win prizes, compete, learn, and more!
              </p>)}
            {appearli(
              <p>How long is Forsyth Hacks?
              <br/>
              the event will be a motion.ull day long (from 10:15 AM to 5:30 PM)
              </p>)}
            {appearli(
              <p>Will there be prizes?
              <br/>
              yes! there will be many fun prizes for everyone. no one will go home empty handed.
              </p>)}
          {
          appearli(
              <p>How big should teams be?
              <br/>
              teams can be anywhere around 1-4 people. don't worry if you don't have a team by the time you register! you can meet new people and create a team the day of the hackathon!
              </p>)}
          {
          appearli(
              <p>What should I bring?
              <br/>
              we recommend you bring the following:
              <br/>    - snack
              <br/>    - laptop
              <br/>    - chargers
              </p>)}
          </motion.ul>
          <hr/>
          <p>food & drink will be provided, but we cannot guarantee access to a computer for everyone.</p>
        </div>
    </div>
  );
}

function appearli(content) {
  const variants = {
    visible: {
      marginLeft: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      marginLeft: -60,
      opacity: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    }
  }
  return (
    <motion.li
      layout
      initial="hidden"
      whileInView="visible"
      viewport={{once: false, amount: 0.9}}
      variants={variants}>
      {content}
    </motion.li>
  )
}