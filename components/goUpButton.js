import React, { useEffect, useState } from 'react'
import { ArrowUpIcon } from '@chakra-ui/icons'
import { Box, Button } from '@chakra-ui/react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 940) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <Box
          onClick={scrollToTop}
          position="fixed"
          bottom="100px"
          right={['15px', '84px']}
          zIndex={3}
          opacity={0.6}
        >
          <Button height={9} size={'sm'} colorScheme="butt" variant="solid">
            <ArrowUpIcon />
          </Button>
        </Box>
      )}
    </>
  )
}
