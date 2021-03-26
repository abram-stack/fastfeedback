import React from 'react'
import {
  Heading,
  Box,
  Text,
  Flex,
  Button
} from '@chakra-ui/react'

import DashboardShell from './DashboardShell'
import AddSiteModal from './AddSiteModal'


const EmptyState = () => (
    <Flex width="100%" color="whiteAlpha.600" backgroundColor="whiteAlpha.900" borderRadius={4} p={8} align="center" justify="center" direction="column">
      <Heading color="gray.600" size="lg">
        You havent added any sites
      </Heading>
      <Text color="gray.600" m={2}> 
        Welcome ! Lets get started.
      </Text>
      <AddSiteModal>
        New Site
      </AddSiteModal>
    </Flex>
)
export default EmptyState