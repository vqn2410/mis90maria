import { useEffect, useState } from 'react'
import { useMusicPlayer } from '../hooks/useMusicPlayer'
import { MUSIC_SRC } from '../data/event'
import EnvelopeIntro from './EnvelopeIntro'
import Hero from './Hero'
import PhotoSection from './PhotoSection'
import Gallery from './Gallery'
import SurpriseSection from './SurpriseSection'
import EventDetails from './EventDetails'
import Countdown from './Countdown'
import Location from './Location'
import CandleSection from './CandleSection'
import MusicPlayer from './MusicPlayer'
import PetalField from './PetalField'
import ScrollProgress from './ScrollProgress'
import Footer from './Footer'

export default function Invitation() {
  const music = useMusicPlayer()
  const [opened, setOpened] = useState(false)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [opened])

  const handleOpen = () => {
    music.start()
    setLeaving(true)
    window.setTimeout(() => setOpened(true), 1150)
  }

  return (
    <main className="invitation">
      <audio ref={music.audioRef} src={MUSIC_SRC} preload="auto" autoPlay playsInline />

      {!opened && <EnvelopeIntro leaving={leaving} onOpen={handleOpen} />}

      <ScrollProgress />
      <PetalField />

      <Hero />
      <PhotoSection />
      <Gallery />
      <SurpriseSection />
      <EventDetails />
      <Countdown />
      <Location />
      <CandleSection />
      <Footer />

      <MusicPlayer
        isPlaying={music.isPlaying}
        needsActivation={music.needsActivation}
        onToggle={music.toggle}
      />
    </main>
  )
}
