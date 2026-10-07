import { useCallback, useEffect, useRef, useState } from 'react'

export function useMusicPlayer() {
  const audioRef = useRef(null)
  const startedRef = useRef(false)
  const userPausedRef = useRef(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [needsActivation, setNeedsActivation] = useState(false)

  const start = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    userPausedRef.current = false

    if (!startedRef.current) {
      audio.currentTime = 0
    }

    const attempt = audio.play()
    if (attempt && typeof attempt.then === 'function') {
      attempt
        .then(() => setNeedsActivation(false))
        .catch(() => setNeedsActivation(true))
    }
  }, [])

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      start()
    } else {
      userPausedRef.current = true
      audio.pause()
    }
  }, [start])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return undefined

    const onPlay = () => {
      startedRef.current = true
      setIsPlaying(true)
      setNeedsActivation(false)
    }
    const onPause = () => setIsPlaying(false)
    const onReady = () => {
      if (audio.paused && !userPausedRef.current) start()
    }

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('canplay', onReady)
    audio.addEventListener('loadeddata', onReady)

    start()

    const retry = () => {
      if (audio.paused && !userPausedRef.current) start()
    }

    const gestureEvents = ['pointerdown', 'touchstart', 'keydown']
    const onFirstGesture = () => {
      retry()
      removeGestureListeners()
    }
    const removeGestureListeners = () => {
      gestureEvents.forEach((event) =>
        window.removeEventListener(event, onFirstGesture),
      )
    }
    gestureEvents.forEach((event) =>
      window.addEventListener(event, onFirstGesture, { passive: true }),
    )
    window.addEventListener('focus', retry)
    document.addEventListener('visibilitychange', retry)

    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('canplay', onReady)
      audio.removeEventListener('loadeddata', onReady)
      removeGestureListeners()
      window.removeEventListener('focus', retry)
      document.removeEventListener('visibilitychange', retry)
    }
  }, [start])

  return { audioRef, isPlaying, needsActivation, start, toggle }
}
