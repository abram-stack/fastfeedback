import React from 'react'
import NextLink from 'next/link'
import {
  Flex,
  Stack,
  Link,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  Text,
  Button
} from '@chakra-ui/react'
import { FastFeedbackIcon } from 'public/icons'
import { useAuth } from '@/lib/auth'
import AddSiteModal from './AddSiteModal'



const DashboardShell = ({ children }) => {
  const auth = useAuth();
  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex
        backgroundColor="white"
        mb={[8, 16]}
        w="full"
        borderTop="5px solid #0AF5F4"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
          h="60px"
        >
          <Flex align="center">
            <NextLink href="/" passHref>
              <Link>
                <FastFeedbackIcon mr={4}/>
              </Link>
            </NextLink>
            <NextLink href="/sites" passHref>
              <Link mr={4}>Sites</Link>
            </NextLink>
            <NextLink href="/feedback" passHref>
              <Link>Feedback</Link>
            </NextLink>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            {auth.user ? <Button mr={ 4}onClick={(e) => auth.signout()}>Sign Out</Button> : null}
            <NextLink href="/account" passHref>
              <Link>
                <Avatar size="sm" src={auth.user?.photoUrl} />
              </Link>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={[0, 8, 8]}>
        <Flex justifyContent='space-between'>
          <Heading mb={8}>My Sites </Heading>
          <AddSiteModal>
            + Add Site
          </AddSiteModal>
        </Flex>

        {children}

      </Flex>

    </Box>
  );
};

export default DashboardShell