import { motion } from 'framer-motion'
import Head from 'next/head'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 }
}

const Layout = ({ children, title }) => {
  const t = `${title} - Nooa Kronqvist`
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      variants={variants}
      transition={{ duration: 0.3, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <title>{t}</title>
          </Head>
        )}
        {children}
      </>
    </motion.article>
  )
}

export default Layout
