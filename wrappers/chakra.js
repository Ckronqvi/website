import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'

export default function Chakra({ children }) {
  /* const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager */

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

/* export async function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
} */
