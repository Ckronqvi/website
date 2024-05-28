import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const styles = {
  global: props => ({
    body: {
      bg: mode('#FFF3DA', '#171923')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontSize: '3xl',
        fontWeight: 'extrabold',
        marginTop: 10,
        marginBottom: 3
      }
    }
  },

  Link: {
    baseStyle: _props => ({
      color: '#ff13e0',
      textUnderlineOffset: 4
    })
  }
}

const fonts = {
  heading: "'Cutive Mono'"
}

const colors = {
  butt: {
    50: '#ffe6ff',
    100: '#ffd1ff',
    200: '#ffaaff', // dark
    300: '#ffd1ff',
    400: '#ff97ff',
    500: '#ff97ff',
    600: '#ffd1ff', // light hower
    700: '#ff5dff',
    800: '#ff4aff',
    900: '#ff37ff'
  }
}

const theme = extendTheme({ config, components, fonts, styles, colors })
export default theme
