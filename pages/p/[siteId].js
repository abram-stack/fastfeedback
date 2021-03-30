// all feedback for specific site
import {
  FormControl,
  FormLabel,
  Button,
  Box,
  Input
} from "@chakra-ui/react"
import { useRouter } from 'next/router';
import { useRef, useState } from "react";

import { getAllFeedback, getAllSites } from "@/lib/db-admin";
import { useAuth } from "@/lib/auth";
import Feedback from "@/components/Feedback";
import { createFeedback } from '@/lib/db';


export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const {feedback}  = await getAllFeedback(siteId);
  
  return {
    props: {
      feedback
    }
  }
}

export async function getStaticPaths() {
  const {sites} = await getAllSites();
  const paths = sites.map(site => ({
    params: {
      siteId: site.id.toString()
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const SiteFeedback = ({ feedback }) => {
  
  const auth = useAuth();
  const router = useRouter();
  const inputEl = useRef(null);
  const [allFeedback, setAllFeedback] = useState(feedback);

  const onSubmit = (e) => {
    e.preventDefault();
    // we create field with author, authorid and the site
    const newFeedback = {
      author: auth.user.name,
      authorId: auth.user.uid,
      siteId: router.query.siteId,
      text: inputEl.current.value,
      createdAt: new Date().toISOString(),
      provider: auth.user.provider,
      status: 'pending'
    }

    setAllFeedback([newFeedback, ...allFeedback]);
    createFeedback(newFeedback);
  }


  return (
    <Box display='flex' flexDirection='column' width='full' maxWidth='700px' margin='0 auto'>
      { auth.user && (
        <Box as='form' onSubmit={ onSubmit}>
        <FormControl id="comment" my={8}>
          <FormLabel>Comment</FormLabel>
          <Input ref={ inputEl} type="comment" id='comment' />
          <Button mt={2} type='submit'>Add Comment</Button>
        </FormControl>
      </Box>
      )}
      { allFeedback.map((feedback) => (
        <Feedback key={feedback.id} {...feedback}/>
    ))}
    </Box>
  );
}
export default SiteFeedback;