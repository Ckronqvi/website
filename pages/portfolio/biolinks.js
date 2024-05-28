import { Box, Container, List, ListItem, Link, Divider } from '@chakra-ui/react'
import { Title, Meta } from '../../components/projectInfo'
import Paragraph from '../../components/paragraph'
import Layout from '../../layouts/article'
import { ProjectImage } from '../../components/projectInfo'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Project = () => (
  <Layout title="Bio links">
    <Container>
      <Divider mt={6} display={{ md: 'none' }} opacity={0.2}></Divider>
      <Title>Bio links</Title>
      <Paragraph>
        A simple page that shows my links, which I use on my personal Instagram
        page. This project utilizes the Vanta.js library for its stunning
        animations.
      </Paragraph>
      <List ml={4} my={6}>
        <ListItem>
          <Meta>Site</Meta>
          <Link href="https://bio-links-two.vercel.app/" target="_blank">
            bio-links-two.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source code</Meta>
          <Link href="https://github.com/Ckronqvi/bio-links" target="_blank">
            github.com/Ckronqvi/bio-links/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <Box
            as="span"
            fontWeight="600"
            fontSize={{ base: '0.88em', md: '1em' }}
          >
            HTML, CSS, Vanta.js
          </Box>
        </ListItem>
      </List>

      <ProjectImage
        src="/images/portfolio/biolinks/image.png"
        alt="Bio links"
      />
    </Container>
  </Layout>
)

export default Project
//export { getServerSideProps } from '../../wrappers/chakra'
