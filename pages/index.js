import Head from 'next/head'
import { Button, Heading, Text, Code, IconButton, Flex, Stack } from "@chakra-ui/react"
import { Icon } from '@chakra-ui/icons';
import { FastFeedbackIcon } from 'public/icons';
import NextLink from 'next/link';
import { FaGithub } from "react-icons/fa";
import { FcGoogle} from "react-icons/fc";

import Dashboard from './dashboard';
import styles from '@/styles/Home.module.css'
import { useAuth } from '@/lib/auth'



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
      <Text p={8}>
        Fast Feedback is the easiest way to add <br/>comments or reviews your static site. <br/>It's still work in progress. but you can try to logging in.
        </Text>
      {auth.user ? (
        // <Button mt={ 4}onClick={ (e) => auth.signout()}>Sign Out</Button>
          <NextLink href='/dashboard'>
            <Button as='a' mt={4}>View Dashboard</Button>
          </NextLink>
          ) : (
          <Stack>
            <Button bgColor='gray.900' color='white' _hover={{ bg: 'gray.700' }} _active={{bg:'gray.800', transform:'scale(0.95)'}} mt={4} onClick={(e) => auth.signinWithGithub()}><FaGithub/> Sign In With Github</Button>
            <Button bgColor='white' color='gray.900' variant='outline' _hover={{ bg: 'gray.100' }} _active={{bg:'gray.100', transform:'scale(0.95)'}} mt={4} onClick={(e) => auth.signinWithGoogle()}><FcGoogle/> Sign In With Google</Button>
          </Stack>
          )
        }
      </Flex>
  )
}
