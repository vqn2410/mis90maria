import Reveal from './Reveal'
import Tilt from './Tilt'
import { MESSAGES, PHOTOS } from '../data/event'

const LAYOUT = [
  { tx: '-92%', ty: '7%', rot: '-11deg', i: 0, z: 1 },
  { tx: '0%', ty: '-7%', rot: '0deg', i: 1, z: 3 },
  { tx: '92%', ty: '7%', rot: '11deg', i: 2, z: 2 },
]

export default function Gallery() {
  return (
    <section className="section gallery" id="galeria">
      <Reveal>
        <p className="section__eyebrow">{MESSAGES.galleryEyebrow}</p>
        <h2 className="section__title">{MESSAGES.galleryTitle}</h2>
        <p className="gallery__text">{MESSAGES.galleryText}</p>
      </Reveal>

      <Reveal className="gallery__deck" delay={140}>
        {PHOTOS.map((photo, index) => {
          const layout = LAYOUT[index]
          return (
            <div
              key={photo.id}
              className="gallery__slot"
              style={{
                '--tx': layout.tx,
                '--ty': layout.ty,
                '--rot': layout.rot,
                '--i': layout.i,
                zIndex: layout.z,
              }}
            >
              <Tilt className="gallery__tilt" max={12}>
                <figure className="gallery__card">
                  <div className="gallery__photo-wrap">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.visibility = 'hidden'
                      }}
                    />
                  </div>
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              </Tilt>
            </div>
          )
        })}
      </Reveal>
    </section>
  )
}
