export const EVENT = {
  honoree: 'María',
  age: 90,
  occasion: '90 años',
  dateLabel: 'Sábado 7 de noviembre',
  timeLabel: '20:30 hs puntuales',
  timeShort: '20:30 HS',
  eventType: 'Fiesta sorpresa',
  address: {
    street: 'Juan de Garay 237',
    city: 'Remedios de Escalada',
    province: 'Buenos Aires',
  },
}

export const AGE_HEADLINE = `${EVENT.honoree.toUpperCase()} CUMPLE ${EVENT.age}`

export const MESSAGES = {
  coverPhrase:
    'Una vida llena de historias, momentos y personas que la quieren.',
  photoMessage:
    'Celebramos sus 90 años y queremos compartir este momento tan especial con vos.',
  photoSignature: 'Nueve décadas de amor, fuerza y ternura.',
  galleryEyebrow: 'Nueve décadas',
  galleryTitle: 'Una vida, mil momentos',
  galleryText:
    'Cada imagen guarda un pedacito de su historia. Estas son solo algunas de las miles de sonrisas que María sembró a lo largo de 90 años.',
  surpriseTitle: '¡SHHH... ES SORPRESA!',
  surpriseText: 'María no sabe nada.',
  surpriseRequest:
    'Por favor, te pedimos que mantengas el secreto hasta el momento de la celebración.',
  surpriseSecretHint: 'Psss... todavía es un secreto',
  candlePrompt: 'Pedile un deseo a María y soplá la velita',
  candleWish: '¡Que los cumplas feliz, María!',
  candleAgain: 'Volver a encender',
  closing: 'Gracias por ser parte de este momento tan especial.',
  closingSecret: 'Recordá: ¡ES SORPRESA!',
  closingNote: 'No le cuentes nada a María.',
}

const asset = (file) => `${import.meta.env.BASE_URL}${file}`

export const MUSIC_SRC = asset('cancion.mp3')

export const PHOTOS = [
  {
    id: 'portrait',
    src: asset('1.jpeg'),
    alt: 'María retratada con luz cálida entre flores',
    caption: 'Su mirada serena',
  },
  {
    id: 'armchair',
    src: asset('2.jpeg'),
    alt: 'María sentada con elegancia y serenidad',
    caption: 'Elegancia de siempre',
  },
  {
    id: 'smile',
    src: asset('3.jpeg'),
    alt: 'María sonriendo rodeada de flores',
    caption: 'La sonrisa que reúne a todos',
  },
]

export const PHOTO_MAIN = PHOTOS[0]
export const PHOTO_SMILE = PHOTOS[2]
export const PHOTO_SECRET = PHOTOS[1]

export const MAPS_QUERY = `${EVENT.address.street}, ${EVENT.address.city}, ${EVENT.address.province}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAPS_QUERY,
)}`

export const EVENT_DATE = new Date('2026-11-07T20:30:00-03:00')
