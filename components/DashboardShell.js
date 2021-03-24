import React from 'react'
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


const DashboardShell = ({ children }) => {
  const auth = useAuth();
  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="whiteAlpha.500"
        justifyContent="space-between"
        px={4}
        py={4}
      >
        <Stack
          spacing={4}
          isInline
          justifyContent="flex-start"
          alignItems="center"
        >
          <FastFeedbackIcon color="black.500" />
          <Link display="block">Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Flex alignItems="center">
          <Link mr={4}>Account</Link>
          <Avatar size="sm" src={auth.user.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.200" justifyContent="center" height="100vh">
        <Flex
          w="100%"
          flexDirection="column"
          justifyContent="center"
          maxWidth="800px"
          ml="auto"
          mr="auto"
          p={4}
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700" fontSize="md">Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading color="black" mb={4}>Sites</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DashboardShell