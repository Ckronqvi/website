import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { IoHomeOutline } from 'react-icons/io5'

const LogoBox = styled.span`
  font-size: 20px;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  height: 40px;
  line-height: 20px;
  padding: 10px;

  &:hover svg {
    transform: scale(1.3);
  }
`
const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <IoHomeOutline style={{ transition: 'all 0.3s ease' }} />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='Cutive Mono", sans-serif'
          fontWeight="bold"
          style={{ marginLeft: '6px' }}
        >
          Nooa Kronqvist
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
