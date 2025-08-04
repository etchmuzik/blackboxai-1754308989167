import Header from '../components/Header'
import Footer from '../components/Footer'
import MusicGenerator from '../components/MusicGenerator'
import Features from '../components/Features'
import Tools from '../components/Tools'
import Pricing from '../components/Pricing'

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <MusicGenerator />
        <Features />
        <Tools />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
