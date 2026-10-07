export default function MusicPlayer({ isPlaying, needsActivation, onToggle }) {
  const showActivate = needsActivation && !isPlaying

  return (
    <div className="music-player">
      {showActivate && (
        <button type="button" className="music-player__activate" onClick={onToggle}>
          <span className="music-player__icon">▶</span>
          Activar música
        </button>
      )}

      {!showActivate && (
        <button
          type="button"
          className={`music-player__toggle ${isPlaying ? 'is-playing' : ''}`}
          onClick={onToggle}
          aria-label={isPlaying ? 'Pausar música' : 'Reanudar música'}
          title={isPlaying ? 'Pausar música' : 'Reanudar música'}
        >
          {isPlaying ? (
            <span className="music-player__equalizer" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          ) : (
            <span className="music-player__icon">▶</span>
          )}
          <span className="music-player__label">{isPlaying ? 'Pausar' : 'Música'}</span>
        </button>
      )}
    </div>
  )
}
