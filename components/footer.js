import { Box, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" mt={10}>
      <Text>
        &copy; {new Date().getFullYear()} Nooa Kronqvist. All Rights Reserved.
      </Text>
      <Text>
        This site uses localStorage to remember your color mode preferences.
        <Link
          as={NextLink}
          href="/privacy-policy"
          colorScheme="gray"
          ml={2}
          fontSize={14}
        >
          Learn more
        </Link>
        .
      </Text>
    </Box>
  )
}

export default Footer
