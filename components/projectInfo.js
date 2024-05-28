import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'

export const Title = ({ children }) => (
  <Box mt={9}>
    <Link as={NextLink} href="/portfolio">
      Portfolio
    </Link>
    <span> / </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const Meta = ({ children }) => (
  <Badge colorScheme="orange" mr={2}>
    {children}
  </Badge>
)

export const ProjectImage = ({ src, alt }) => (
  <Image
    borderRadius="lg"
    w="100%"
    src={src}
    alt={alt}
    mb={4}
    transition="transform 0.2s"
    _hover={{
      base: { transform: 'none' },
      md: { transform: 'scale(1.02)' }
    }}
  />
)

export const ProjectDoubleImage = ({ src, alt }) => (
  <Image
    borderRadius="lg"
    w="100%"
    maxW="calc(50% - 1rem)"
    src={src}
    alt={alt}
    mb={4}
    transition="transform 0.2s"
    _hover={{ transform: 'scale(1.02)' }}
  />
)

export const DoubleImage = ({ children }) => (
  <Box
    display="flex"
    justifyContent="space-between"
    w="100%"
    mb={4}
    maxWidth={'100%'}
  >
    {children}
  </Box>
)
