import {
  Box,
  Container,
  List,
  ListItem,
  AspectRatio,
  Divider,
  Link
} from '@chakra-ui/react'
import { Title, Meta } from '../../components/projectInfo'
import Paragraph from '../../components/paragraph'
import Layout from '../../layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Project = () => (
  <Layout title="GoSupermodel Bot">
    <Container>
      <Divider mt={6} display={{ md: 'none' }} opacity={0.2}></Divider>
      <Title>GoSupermodel Bot</Title>
      <Paragraph>
        a Bot designed to beat the Wardrobe Challenge minigame in GoSupermodel.
        The minigame is supprisingly complex and it requires some mental stamina
        to beat. Since neither the community nor I knew the complete solving
        logic, defining it was the biggest hurdle I faced when creating this
        bot. However, utilizing dynamic programming techniques and moves that I
        personally think are the greatest, I was able to create an algorithm
        that succeeded in solving every puzzle in a reasonable time.
      </Paragraph>
      <List ml={4} my={6}>
        <ListItem>
          <Meta>Source code</Meta>
          <Link href="https://github.com/Ckronqvi/vaatepeli" target="_blank">
            github.com/Ckronqvi/vaatepeli/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <Box
            as="span"
            fontWeight="600"
            fontSize={{ base: '0.88em', md: '1em' }}
          >
            Java, OpenCV
          </Box>
        </ListItem>
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          title="Embedded Media titled: demovideo"
          width="560"
          height="315"
          src="https://oulu.yuja.com/V/Video?v=734522&node=3603496&a=34910244&preload=false"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Project
//export { getServerSideProps } from '../../wrappers/chakra'
