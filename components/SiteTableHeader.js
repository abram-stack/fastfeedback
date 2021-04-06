import { Flex, Heading } from '@chakra-ui/layout';
import AddSiteModal from './AddSiteModal'

const SiteTableHeader = () => (
      <Flex justifyContent='space-between'>
          <Heading mb={8}>My Sites </Heading>
          <AddSiteModal>
            + Add Site
          </AddSiteModal>
      </Flex>
)

export default SiteTableHeader;