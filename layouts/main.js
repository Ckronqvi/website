import Head from 'next/head'
import Navbar from '../components/navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../components/footer'

const MainLayout = ({ children, router }) => {
  return (
    <Box
      as="main"
      pb={8}
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nooa Kronqvist - Homepage" />
        <meta name="author" content="Nooa Kronqvist" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Nooa Kronqvist - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14} flex="1">
        {children}
      </Container>

      <Footer />
    </Box>
  )
}

export default MainLayout
