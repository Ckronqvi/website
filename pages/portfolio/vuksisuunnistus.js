import {
  Container,
  List,
  Link,
  ListItem,
  AspectRatio,
  Box,
  Divider
} from '@chakra-ui/react'
import {
  Title,
  Meta,
  ProjectDoubleImage,
  DoubleImage
} from '../../components/projectInfo'
import Paragraph, { Platform, VideoTitle } from '../../components/paragraph'
import Layout from '../../layouts/article'
import ScrollToTop from '../../components/goUpButton.js'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Project = () => (
  <Layout title="Vuksisuunnistus">
    <Container mb={14}>
      <Divider mt={6} display={{ md: 'none' }} opacity={0.2}></Divider>
      <Title>Vuksisuunnistus</Title>
      <Paragraph>
        An application designed to support a popular orienteering event for
        freshmen. This is the first app I&apos;ve created that works on both{' '}
        <Platform>iOS</Platform> and <Platform>Android</Platform> devices. This
        app was the end product of my team&apos;s bachelor&apos;s project.
      </Paragraph>
      <List ml={4} my={6}>
        <ListItem>
          <Meta>Source code</Meta>
          <Link
            href="https://github.com/Ckronqvi/vuksisuunnistus"
            target="_blank"
          >
            github.com/Ckronqvi/vuksisuunnistus/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <Box
            as="span"
            fontWeight="600"
            fontSize={{ base: '0.88em', md: '1em' }}
          >
            Expo, React-Native, Firestore, GCP
          </Box>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <Box
            as="span"
            fontWeight="600"
            fontSize={{ base: '0.88em', md: '1em' }}
          >
            Android, iOS
          </Box>
        </ListItem>
      </List>
      <DoubleImage>
        <ProjectDoubleImage
          src="/images/portfolio/vuksisuunnistus/wMap.png"
          alt="Vuksisuunnistus app image"
        />
        <ProjectDoubleImage
          src="/images/portfolio/vuksisuunnistus/dMap.png"
          alt="Vuksisuunnistus app image"
        />
      </DoubleImage>
      <DoubleImage>
        <ProjectDoubleImage
          src="/images/portfolio/vuksisuunnistus/lHome.png"
          alt="Vuksisuunnistus app image"
        />
        <ProjectDoubleImage
          src="/images/portfolio/vuksisuunnistus/dHome.png"
          alt="Vuksisuunnistus app image"
        />
      </DoubleImage>
      <DoubleImage>
        <ProjectDoubleImage
          src="/images/portfolio/vuksisuunnistus/rastit.png"
          alt="Vuksisuunnistus app image"
        />
        <ProjectDoubleImage
          src="/images/portfolio/vuksisuunnistus/creating.png"
          alt="Vuksisuunnistus app image"
        />
      </DoubleImage>
      <VideoTitle>
        Demo video from the app&apos;s development version
      </VideoTitle>
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          title="Embedded Media titled: demovideo"
          width="560"
          height="315"
          src="https://oulu.yuja.com/V/Video?v=732247&node=3593062&a=130573670&preload=false"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
        ></iframe>
      </AspectRatio>
      <ScrollToTop />
    </Container>
  </Layout>
)

export default Project
//export { getServerSideProps } from '../../wrappers/chakra.js'
