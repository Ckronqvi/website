import AnimatedBox from '../../components/animatedBox'
import { Container, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../layouts/article'
import Section from '../../components/section'
import { PortfolioImageThumb } from '../../components/project-item'
import bioImg from '../../public/images/portfolio/biolinks/thumb.png'
import vuksiImg from '../../public/images/portfolio/vuksisuunnistus/thumb.png'
import botImg from '../../public/images/portfolio/bot/thumb.png'
import gameImg from '../../public/images/portfolio/game/thumb.png'

const Portfolio = () => (
  <Layout title="Portfolio">
    <Container>
      <AnimatedBox
        mt={10}
        mb={9}
        p={3}
        textAlign="center"
        maxW={{ md: '50%' }}
        mx="auto"
      >
        Some of my previous works.
      </AnimatedBox>

      <SimpleGrid columns={[1, 1, 2]} gap={8}>
        <Section delay={0.2}>
          <PortfolioImageThumb
            name="vuksisuunnistus"
            title="Vuksisuunnistus app"
            thumbnail={vuksiImg}
          >
            An app made to aid freshman orienteering event (fuksisuunnistus)
          </PortfolioImageThumb>
        </Section>
        <Section delay={0.2}>
          <PortfolioImageThumb
            name="bot"
            title="Wardrobe Challenge bot"
            thumbnail={botImg}
          >
            A bot made in Java that automates the Wardrobe Challenge minigame.
          </PortfolioImageThumb>
        </Section>
        <Section delay={0.2}>
          <PortfolioImageThumb
            name="biolinks"
            title="Bio links"
            thumbnail={bioImg}
          >
            An animated links page created for my Instagram bio.
          </PortfolioImageThumb>
        </Section>
        <Section delay={0.2}>
          <PortfolioImageThumb
            name="game"
            title="Rust game"
            thumbnail={gameImg}
          >
            A simple terminal game made in Rust language.
          </PortfolioImageThumb>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Portfolio
//export { getServerSideProps } from '../../wrappers/chakra'
