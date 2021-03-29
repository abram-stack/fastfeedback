import { Flex, Link } from "@chakra-ui/layout";

export default function FeedbackLink({siteId}) {
  return (
    <Flex justifyContent='space-between' mb={8} width='full' mt={1}>
      <Link fontWeight='bold' fontSize='sm' href={`/p/${siteId}`}>Leave Comment</Link>
      <Link fontsize='xs' color='blackAlpha.500' href='/'>Powered by Fast Feedback</Link>
    </Flex>
  )
}