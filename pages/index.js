import Head from 'next/head'
import { Button, Heading, Text, Code } from "@chakra-ui/react"
import styles from '@/styles/Home.module.css'
import { useAuth } from '@/lib/auth'

export default function Home() {

  const auth = useAuth();


  return (
    <div>
      <main>
        <Heading fontWeight='medium'>
          Fast Feedback
        </Heading>

        <Text> 
          Current User : <Code>{ auth?.user ? auth.user.email : 'None'}</Code>
        </Text>

        {auth.user ? (
          <Button onClick={ (e) => auth.signout()}>Sign Out</Button>
          ) : (
          <Button onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
          )
        }

      </main>
    </div>
  )
}
