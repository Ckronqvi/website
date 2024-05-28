import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { IoSunnySharp, IoMoon } from 'react-icons/io5'

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 30, opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        <IconButton
          aria-label="Toggle theme"
          variant={useColorModeValue('outline', undefined)}
          colorScheme={useColorModeValue('purple', 'pink')}
          icon={useColorModeValue(<IoMoon />, <IoSunnySharp />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeButton
