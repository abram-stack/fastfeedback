import Head from 'next/head'
import { Button, Heading, Text, Code, IconButton, Flex } from "@chakra-ui/react"
import styles from '@/styles/Home.module.css'
import { FastFeedbackIcon } from 'public/icons';
import { useAuth } from '@/lib/auth'
import NextLink from 'next/link';
import Dashboard from './dashboard';

export default function Home() {

  const auth = useAuth();


  return (
    <Flex as="main" align="center" direction="column" justify="center" h="100vh">
        <Head>
        <title>Fast Feedback</title>
         <script dangerouslySetInnerHTML={{ __html: `
          if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
            window.location.href = "/dashboard"
          }
        ` }} />
        </Head>
        <FastFeedbackIcon color="black.500" boxSize="64px" />
      <Text>
        Fast Feedback is the easiest way to add <br/>comments or reviews your static site. <br/>It's still work in progress. but you can try to logging in.
        </Text>
      {auth.user ? (
        // <Button mt={ 4}onClick={ (e) => auth.signout()}>Sign Out</Button>
          <NextLink href='/dashboard'>
            <Button as='a' mt={4}>View Dashboard</Button>
          </NextLink>
          ) : (
          <Button mt={4} onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
          )
        }
      </Flex>
  )
}
