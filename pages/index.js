import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//import { GithubButton, ReplitButton } from '../components/SocialButtons.tsx'
import GithubButton from '../components/GithubButton.tsx'
import ReplitButton from '../components/ReplitButton.tsx'
import RandomButton from '../components/RandomButton.tsx'
import { motion, useViewportScroll, useTransform } from "framer-motion"
import {
  ChevronRightIcon, ChevronDownIcon
} from '@chakra-ui/icons'
import {
  Box,
  Flex, Spacer,
  Stack, VStack, HStack,
  Heading, Text,
  Circle,
  Avatar
} from "@chakra-ui/react";

/*
<div>
  <motion.div className={styles.thebox}
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      loop: Infinity,
      repeatDelay: 1
    }}
  />
</div>
*/

export default function Home() {
  /* Fade out on scroll
  const { scrollYProgress } = useViewportScroll()
  const opacityAnim = useTransform(scrollYProgress, [0, 1], [1, 0])
  */

  return (
    <div className={styles.container}>
      <Head>
        <title>Supercolbat</title>
        <meta name="description" content="My name is Joey Lent and I am a self-taught student developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.headerWrapper}>
          <Flex className={styles.header}>
            <Stack>
              <Heading className={styles.title} as="h1" size="4xl">
                Joey<br />Lent.
              </Heading>
              <Text>Self-taught Student Developer</Text>
            </Stack>
            
            <Spacer />
            <VStack h="50vh" justify="space-around">
              <motion.button
                className={styles.socialButton}
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubButton />
              </motion.button>
              <motion.button
                className={styles.socialButton}
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.9 }}
              >
                <ReplitButton />
              </motion.button>
              
            </VStack>
          </Flex>
        
        <motion.div
          className={styles.scrollDown}
          animate={{
            y: [0, 20]
          }}
          transition={{
            duration: 1,
            repeatType: "reverse",
            repeat: Infinity
          }}
        >
          <ChevronDownIcon w="50px" h="50px" />
        </motion.div>
        </div>

        <Heading align="center">
          The website is under construction. Check out these repos while you wait!
        </Heading>
        <Text align="center">
          These repos are definitely still actively maintained.
        </Text>

        <div className={styles.grid}>
          <a
            href="https://github.com/Supercolbat/dotfiles"
            className={styles.card}
            target="_blank"
          >
            <h2>dotfiles &rarr;</h2>
            <p>"time to show the whole world how messy i am" ~ me.</p>
          </a>

          <a
            href="https://github.com/Supercolbat/Muck1337"
            className={styles.card}
            target="_blank"
          >
            <h2>Muck1337 &rarr;</h2>
            <p>Utility mod / Hack for Muck, a game made by DaniDev.</p>
          </a>

          <a
            href="https://github.com/Supercolbat/RoBot"
            className={styles.card}
            target="_blank"
          >
            <h2>RoBot &rarr;</h2>
            <p>A framework for making chat-controlled Roblox bots.</p>
          </a>

          <a
            href="https://github.com/Supercolbat/BFuscate"
            className={styles.card}
            target="_blank"
          >
            <h2>BFuscate &rarr;</h2>
            <p>
              A decent obfuscator for Python, in Python.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by ☕
        </a>
      </footer>
    </div>
  )
}
