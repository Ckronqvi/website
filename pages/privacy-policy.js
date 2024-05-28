import { useRouter } from 'next/router'
import Layout from '../layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { Box, Container, Heading, Button, Text } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

const PrivacyPolicy = () => {
  const router = useRouter()

  const handleReturn = () => {
    router.back()
  }

  return (
    <Layout>
      <Container>
        <Box mt={14}>
          <Heading as="h2" variant="page-title" mb={2}>
            Privacy Policy
          </Heading>
          <Section>
            <Paragraph>
              This website uses localStorage to store your color mode
              preferences (light or dark mode). This helps the site to know your
              preferred settings for a better user experience. No personal data
              is collected or tracked through this mechanism.
            </Paragraph>
            <Button
              onClick={handleReturn}
              mt={6}
              colorScheme="butt"
              leftIcon={<ChevronLeftIcon />}
            >
              <Text mb={{ base: 0.5, md: 1 }} mr={1}>
                Go back
              </Text>
            </Button>
          </Section>
        </Box>
      </Container>
    </Layout>
  )
}

export default PrivacyPolicy
