import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import GithubButton from '../components/GithubButton.tsx'
import ReplitButton from '../components/ReplitButton.tsx'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import {
  Box, Center,
  Flex, Spacer,
  Stack, VStack, HStack,
  Heading, Text,
  Circle,
  Avatar
} from "@chakra-ui/react"

export default function Home() {
  /* Fade out on scroll
  const { scrollYProgress } = useViewportScroll()
  const opacityAnim = useTransform(scrollYProgress, [0, 1], [1, 0])
  */

  return (
    <div className={styles.container}>
      <Head>
        <title>Joey Lent</title>
        <meta name="description" content="Hey! I'm Joey Lent and I'm a hobbyist developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Flex className={styles.header}>
          <Stack>
            <Heading className={styles.title} as="h1" size="4xl">
              Hey,<br />
              I'm <span className={styles.titleBold}>Joey<br />
              <p className={styles.titleIndent}>Lent</p></span>
            </Heading>
            <Text className={styles.headerDescription}>Hobbyist developer / I use Fedora BTW</Text>
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

        <div className={styles.headerDrop}>
          <div className={styles.top}></div>
          <Center className={styles.left}>
            Hello! I am Joey Lent, and I enjoy creating random things. I’ve created programs in a wide variety of areas. These include web and mobile, Discord bots, web scraping and automation, and more. I primarily work with Python, but I also know how to use Flutter/Dart, React, Javascript, HTML, CSS, Lua, BF, and RegEx. In the future, I hope to learn C, Rust, and improve my skills with Flutter and React.
          </Center>
          <Stack>
            <div className={styles.rightBottom}></div>
            <div className={styles.rightTop}></div>
            <div className={styles.skills}>
              <Heading className={styles.title} as="h2" size="2xl" align="center">
                Skills
              </Heading>
            </div>
          </Stack>
        </div>

        <div className={styles.bottomDrop}>
          <Stack>
            <Center className={styles.content}>
              <Heading className={styles.title} as="h2" size="2xl" align="center">
                Projects
              </Heading>
            </Center>
            <div className={styles.leftTop}></div>
            <div className={styles.leftBot}></div>
            <div className={styles.bottom}></div>
            <div className={styles.rightTop}></div>
            <div className={styles.rightBot}></div>
          </Stack>
        </div>

        <div className={styles.projects}>
          <div className={styles.grid}>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Vercel, Nord Theme, and ☕
        </a>
      </footer>
    </div>
  );
}
