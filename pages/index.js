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
        <Heading fontWeight='medium'>
          <title>Fast Feedback</title>
        </Heading>
        <FastFeedbackIcon color="black.500" boxSize="64px" />
    
      {auth.user ? (
        // <Button mt={ 4}onClick={ (e) => auth.signout()}>Sign Out</Button>
          <NextLink href='/dashboard'>
            <Button as='a'>View Dashboard</Button>
          </NextLink>
          ) : (
          <Button mt={4} onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
          )
        }
      </Flex>
  )
}
