import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import Layout from '../layouts/article'
import SplineScene from '../components/spline'
import AnimatedBox from '../components/animatedBox'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { Description, Year, WorkSection } from '../components/experience'
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
  IoChevronForward
} from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <AnimatedBox mt={10} mb={6} p={3} textAlign="center">
        Hello, I&apos;m a passionate software developer from Oulu!
      </AnimatedBox>
      <Box display={{ md: 'flex' }}>
        <Box
          flexGrow={1}
          textAlign={{ base: 'center', md: 'left' }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Heading as="h2" variant="page-title">
            Nooa Kronqvist
          </Heading>
          <p>Computer Science Student</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            w="200px"
            h="200px"
            display="inline-block"
            overflow="hidden"
            alignItems="center"
            justifyContent="center"
          >
            <SplineScene />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Who am I?
        </Heading>
        <Paragraph>
          I&apos;m in my third year studying information processing science at
          the{' '}
          <Link
            as={NextLink}
            href="https://www.oulu.fi/"
            passHref
            target="_blank"
          >
            University of Oulu
          </Link>
          . I am passionate about learning and personal development, and I have
          a strong enthusiasm for software development. During my leisure time,
          I enjoy playing the piano and maintaining a regular fitness regimen at
          the gym. Both activities provide me with a balance between relaxation
          and physical well-being, allowing me to recharge and stay focused. I
          also enjoy reading and watching all sorts of YouTube videos, which are
          typically tech-related.
        </Paragraph>
        <Box align="center" my={4} display={{ md: 'none' }}>
          <Button
            as={NextLink}
            href="/portfolio"
            scroll={false}
            rightIcon={<IoChevronForward />}
            colorScheme="butt"
          >
            My projects
          </Button>
        </Box>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" mt={16}>
          Experience
        </Heading>
        <WorkSection>
          <Year>2021 + 2022 | City of Kokkola | IT department</Year>
          <Description>
            I served as a Help Desk Engineer in the IT department of the city of
            Kokkola for a four-month tenure. During this period, I gained
            valuable insights into system administration and general project
            management. Also, I was able to hone my troubleshooting and
            communication skills.
          </Description>
        </WorkSection>
        <WorkSection>
          <Year>2024 </Year>
          <Description>
            I&apos;m currently finishing my Bachelor&apos;s studies and looking
            for work.👀
          </Description>
        </WorkSection>
      </Section>
      <Section delay={0.4}>
        <Heading
          as="h3"
          variant="section-title"
          textAlign={{ base: 'center', md: 'left' }}
          mt={20}
        >
          All my links
        </Heading>
        <Box
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
        >
          <List>
            <ListItem my={2}>
              <Link href="https://github.com/ckronqvi" target="_blank">
                <Button
                  variant="ghost"
                  color="#f5690c"
                  leftIcon={<IoLogoGithub />}
                >
                  Ckronqvi
                </Button>
              </Link>
            </ListItem>
            <ListItem my={2}>
              <Link
                href="https://www.linkedin.com/in/nooa-kronqvist/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  color="#f5690c"
                  leftIcon={<IoLogoLinkedin />}
                >
                  Nooa Kronqvist
                </Button>
              </Link>
            </ListItem>
            <ListItem my={2}>
              <Link href="https://instagram.com/nooakronqvist" target="_blank">
                <Button
                  variant="ghost"
                  color="#f5690c"
                  leftIcon={<IoLogoInstagram />}
                >
                  @nooakronqvist
                </Button>
              </Link>
            </ListItem>
          </List>
        </Box>

        <Box align="center" my={10}>
          <Button
            as={NextLink}
            href="mailto:nooa.kronqvist@hotmail.com"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="butt"
          >
            Contact me
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
//export { getServerSideProps } from '../wrappers/chakra'
