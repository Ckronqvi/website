import { Box, Container, List, ListItem, Link, Divider } from '@chakra-ui/react'
import { Title, Meta } from '../../components/projectInfo'
import Paragraph from '../../components/paragraph'
import Layout from '../../layouts/article'
import { ProjectImage } from '../../components/projectInfo'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Project = () => (
  <Layout title="Rust game">
    <Container>
      <Divider mt={6} display={{ md: 'none' }} opacity={0.2}></Divider>
      <Title>Rust Game</Title>
      <Paragraph>
        A simple terminal game made in Rust programming language. This was the
        final assignment for the course{' '}
        <em>Modern and Emerging Programming Languages</em>.
      </Paragraph>
      <List ml={4} my={6}>
        <ListItem>
          <Meta>Source code</Meta>
          <Link
            href="https://github.com/Ckronqvi/game-assignment"
            target="_blank"
          >
            github.com/Ckronqvi/game-assignment/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <Box
            as="span"
            fontWeight="600"
            fontSize={{ base: '0.88em', md: '1em' }}
          >
            Rust
          </Box>
        </ListItem>
      </List>

      <ProjectImage
        src="/images/portfolio/game/image.png"
        alt="Rust game image"
      />
    </Container>
  </Layout>
)

export default Project
//export { getServerSideProps } from '../../wrappers/chakra'
