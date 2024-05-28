import { Box, useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useState, useEffect } from 'react'

const getGradient = colormode => {
  if (colormode === 'light') {
    return `
       color: black;
      --main-bg: conic-gradient(
        from var(--border-angle),
        #ffffff,
        #fefbf1 5%,
        #fefbf1 60%,
        #ffffff 95%
      );
      --gradient-border: conic-gradient(from var(--border-angle), transparent 25%, #D9C2DD, #DE8DF0 99%, transparent);
    `
  } else {
    return `
        color: white;
      --main-bg: conic-gradient(
        from var(--border-angle),
        #213,
        #112 5%,
        #112 60%,
        #213 95%
      );
      --gradient-border: conic-gradient(from var(--border-angle), transparent 25%, #5A4E6D, #A851B0 99%, transparent);
    `
  }
}

const getColors = colormode => {
  if (colormode === 'light') {
    return `
      color: black;
      background-color: #FFFAED;
    `
  } else {
    return `
      color: white;
      background-color: #383645;
    `
  }
}

// For chromium based browsers
const AnimatedBox = styled(Box)`
  display: grid;
  place-content: center;
  ${props => getGradient(props.colormode)}
  border: solid 2px transparent;
  border-radius: 2em;
  background:
    var(--main-bg) padding-box,
    var(--gradient-border) border-box,
    var(--main-bg) border-box;

  background-position: center center;
  animation: bg-spin 3s linear infinite;

  @keyframes bg-spin {
    to {
      --border-angle: 1turn;
    }
  }

  @property --border-angle {
    syntax: '<angle>';
    inherits: true;
    initial-value: 0turn;
  }
`

// Styled component for the simple box (for Firefox)
const SimpleBox = styled(Box)`
  ${props => getColors(props.colormode)}
  display: grid;
  place-content: center;
  border: solid 2px transparent;
  border-radius: 2em;
`

export default function AnimatedBoxComponent({ children, ...props }) {
  const { colorMode } = useColorMode()
  const [isFirefox, setIsFirefox] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsFirefox(
        window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1
      )
    }
  }, [])

  return (
    <>
      {isFirefox ? (
        <SimpleBox colormode={colorMode} {...props}>
          {children}
        </SimpleBox>
      ) : (
        <AnimatedBox colormode={colorMode} {...props}>
          {children}
        </AnimatedBox>
      )}
    </>
  )
}
