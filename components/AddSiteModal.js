import { useRef } from "react";
import { useForm } from "react-hook-form";
import { mutate } from "swr";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Button,
  useToast
} from "@chakra-ui/react"
import fetcher  from '@/utils/fetcher';
import  {createSite}  from "@/lib/db";
import { useAuth } from "@/lib/auth";
import { transform } from "framer-motion";


const AddSiteModal = ({children}) => {

  const auth = useAuth();
  const toast = useToast();

  const initialRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm();


  const onCreateSite = ({ name, url }) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      url
    };
    createSite(newSite);
    toast({
          title: "Success!",
          description: "We've created your site.",
          status: "success",
          duration: 5000,
          isClosable: true,
    })
    mutate(['/api/sites', auth.user.token], async (data) => {
      return { sites : [...data.sites, newSite]}
    },false)
    onClose();
  }

  return (
    <>
      <Button
        onClick={onOpen}
        fontWeight="medium"
        color="white"
        backgroundColor="gray.900"
        m={2}
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        {children}
      </Button>
    
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader>Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input ref={initialRef} placeholder="My Site" name="name" ref={register({ required: true })} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input placeholder="https://website.com" name="url" ref={register({ required: true})} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>Cancel</Button>
            <Button colorScheme="teal" type="submit">
              Create
            </Button>
          </ModalFooter> 
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddSiteModal;