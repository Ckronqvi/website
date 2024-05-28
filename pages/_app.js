import { AnimatePresence } from 'framer-motion'
import Chakra from '../wrappers/chakra'
import MainLayout from '../layouts/main'
import Fonts from '../components/fonts'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra>
      <Fonts />
      <MainLayout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    </Chakra>
  )
}

export default Website
