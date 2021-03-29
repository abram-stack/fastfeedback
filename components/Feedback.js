import { Box, Divider, Heading, Text } from "@chakra-ui/layout";
import { format, parseISO } from "date-fns";


export default function Feedback({author, text, createdAt}) {
  return (
    <Box borderRadius={4} maxWidth='700px' w='full'>
      <Heading size='sm' as='h3' mb={0} color='gray.900'  >
        {author}
      </Heading>
      <Text color='gray.500' mb={4} fontSize='xs'>
        {format(parseISO(createdAt), 'PPpp')}
      </Text>
      <Text color='gray.800' mb={2}>
        {text}
      </Text>
      <Divider borderColor='gray.200' backgroundColor='gray.200' mb={ 4}></Divider>
    </Box>
  )
}