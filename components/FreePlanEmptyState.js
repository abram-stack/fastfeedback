import React from 'react'
import {
  Heading,
  Box,
  Text,
  Button
} from '@chakra-ui/react'

import DashboardShell from './DashboardShell'


const FreePlan = () => (
  <DashboardShell>
    <Box width="100%" color="whiteAlpha.600" backgroundColor="whiteAlpha.900" borderRadius={4} p={8}>
      <Heading color="gray.600">
        Get Feedback on your site instantly
      </Heading>
      <Text color="gray.600" m={2}>
        Start today{' '}
      </Text>
        <Button variant="solid" size="md" color="blackAlpha.700" backgroundColor="gray.200" m={2}>
          Upgrade to starter
        </Button>
    </Box>
  </DashboardShell>
    
  
)
export default FreePlan