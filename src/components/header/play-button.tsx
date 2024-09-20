'use client'
import Image from 'next/image'
import { useRef } from 'react'

import PlayerButton from '@/assets/player-button.svg'

export function PlayButton() {
  const soundRef = useRef<HTMLAudioElement>(null)

  function handlePlay() {
    if (soundRef.current) {
      soundRef.current.play()
    }
  }

  return (
    <>
      <audio id="a1" ref={soundRef}>
        <source src="/sounds/button-play-click.mp3" type="audio/mpeg" />
      </audio>

      <button
        className="relative z-20 flex h-[52px] w-[206px] items-center justify-center brightness-75 hover:brightness-150"
        onClick={handlePlay}
      >
        <Image src={PlayerButton} alt="player" />

        <div className="absolute left-[50px] flex h-full w-[141px] items-center justify-center">
          <span className="font-poppins font-bold text-white-100">Play</span>
        </div>
      </button>
    </>
  )
}
