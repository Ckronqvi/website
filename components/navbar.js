import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './themeButton'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href || path.startsWith(`${href}/`)
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      color={active ? '#202023' : inactiveColor}
      bg={active ? 'pink' : undefined}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('blackAlpha.50', 'blackAlpha.400')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/portfolio" path={path}>
            Portfolio
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu" initialFocusRef={'none'}>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    as={IconButton}
                    icon={
                      isOpen ? <CloseIcon w={2.5} h={2.5} /> : <HamburgerIcon />
                    }
                    variant={isOpen ? 'solid' : 'outline'}
                    aria-label="Options"
                  />
                  <MenuList>
                    <MenuItem as={MenuLink} href="/">
                      About
                    </MenuItem>
                    <MenuItem as={MenuLink} href="/portfolio">
                      Portfolio
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
