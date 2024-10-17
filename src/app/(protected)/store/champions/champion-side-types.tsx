'use client'

import { type ChangeEvent, useState } from 'react'

type Options = 'skins' | 'chromas' | 'packages'

export function ChampionSideTypes() {
  const [type, setType] = useState<Options>('skins')

  function handleChangeType(e: ChangeEvent<HTMLInputElement>) {
    const checkedValue = e.target.value as Options

    setType(checkedValue)
  }

  return (
    <div className="space-y-5">
      <label className="flex cursor-pointer items-center gap-3">
        <input
          type="radio"
          name="type"
          id="type"
          value="skins"
          onChange={handleChangeType}
          defaultChecked={type === 'skins'}
          className="hidden"
        />
        <div className="flex h-3 w-3 rotate-45 items-center justify-center border-2 border-gold-400">
          {type === 'skins' && <div className="h-1 w-1 bg-gold-400"></div>}
        </div>
        <span className="font-league text-sm uppercase tracking-wide text-gold-100">
          skins
        </span>
      </label>

      <label className="flex cursor-pointer items-center gap-3">
        <input
          type="radio"
          name="type"
          id="type"
          value="chromas"
          onChange={handleChangeType}
          defaultChecked={type === 'chromas'}
          className="hidden"
        />
        <div className="flex h-3 w-3 rotate-45 items-center justify-center border-2 border-gold-400">
          {type === 'chromas' && <div className="h-1 w-1 bg-gold-400"></div>}
        </div>
        <span className="font-league text-sm uppercase tracking-wide text-gold-100">
          chromas
        </span>
      </label>
      <label className="flex cursor-pointer items-center gap-3">
        <input
          type="radio"
          name="type"
          id="type"
          value="packages"
          onChange={handleChangeType}
          defaultChecked={type === 'packages'}
          className="hidden"
        />
        <div className="flex h-3 w-3 rotate-45 items-center justify-center border-2 border-gold-400">
          {type === 'packages' && <div className="h-1 w-1 bg-gold-400"></div>}
        </div>
        <span className="font-league text-sm uppercase tracking-wide text-gold-100">
          packages
        </span>
      </label>
      {/* <label className="flex" htmlFor="type">
        <input
          type="radio"
          name="type"
          id="type"
          value="skins"
          onChange={handleChangeType}
          defaultChecked={type === 'skins'}
        />
        skins
      </label>
      <label className="flex" htmlFor="chromas">
        <input
          type="radio"
          name="type"
          id="type"
          value="chromas"
          onChange={handleChangeType}
          defaultChecked={type === 'chromas'}
        />
        skins
      </label>
      <label className="flex" htmlFor="packages">
        <input
          type="radio"
          name="type"
          id="type"
          value="packages"
          onChange={handleChangeType}
          defaultChecked={type === 'packages'}
        />
        skins
      </label> */}
    </div>
  )
}
