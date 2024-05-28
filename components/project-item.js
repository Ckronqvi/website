import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'

export const PortfolioImageThumb = ({ children, name, title, thumbnail }) => (
  <Box
    w="100%"
    textAlign="center"
    transition="transform 0.2s"
    _hover={{
      base: { transform: 'none' },
      md: { transform: 'scale(1.02)' }
    }}
  >
    <LinkBox
      as={NextLink}
      href={`/portfolio/${name}`}
      scroll={false}
      cursor="pointer"
    >
      <Box borderRadius="6%" overflow="hidden">
        <Image
          src={thumbnail}
          alt={title}
          placeholder="blur"
          w="100%"
          h="auto"
        />
      </Box>
      <LinkOverlay as="div" href={`/portfolio/${name}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)
