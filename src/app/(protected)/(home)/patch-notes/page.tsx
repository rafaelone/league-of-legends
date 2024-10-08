import Image from 'next/image'

export default function PatchNotes() {
  return (
    <div className="mt-5">
      <h1 className="font-league text-2xl font-normal leading-6 text-white-100">
        Patch Notes 14.19
      </h1>
      <span className="mt-4 flex items-center gap-2 font-league text-sm font-normal uppercase leading-6 text-white-100">
        <Image
          src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/11276526bb012a19d624efa3b313569988c96ebe-193x190.png"
          alt="riot sakaar"
          width={32}
          height={32}
          className="rounded-full"
        />{' '}
        riot sakaar - 7 days ago
      </span>

      <blockquote className="mt-6 break-words font-league text-md font-normal leading-6 text-white-100">
        "Welcome to Update 14.19 and the start of Step 3!"
        <br />
        <br />
        We brought a huge update to the system, with the right to nerfs to
        almost all Legendary Items by about 5 to 12%. The purpose of this is to
        reduce the snowball effect, slow down the combat rhythm at the end of
        the game and make fights clearer. Let's go start by reducing Movement
        Speed, Ability Haste and damage dealt by classes and subclasses that
        don't need them, but preserving these attributes for those who need
        them.
        <br />
        <br />
        We are also bringing back the Fatal Rhythm rune, but replacing the
        Extremely high late-game Attack Speed and Attack Range bonus for a bit
        of on-hit damage, which should be great for a sustain damage rune
        without invalidating Speed purchases Attack. This change comes with some
        updates to minor runes also.
        <br />
        <br />
        Some Champions are receiving more notable updates: Elise is getting a
        script overhaul and some quality of life improvements and autonomy;
        K'Sante is getting a major update for improve the experience of players
        who face it, in addition to a review skills as an occasional duelist;
        Tristana is receiving updated abilities to strengthen her in bot lane,
        but without changing things too much in the mid lane.
        <br />
        <br />
        We also have several quality of life and usability improvements for the
        game. It will now be possible to queue items and purchase Items
        Partially legendary with a single click, plus receive a reminder on the
        screen for when it's time to return to base and finish the item, or when
        you leave the base without purchasing anything. And when you're with At
        low health, potions will also flash in the inventory. The particles of
        Towers have also been upgraded and now grow in size and ferocity as they
        become more aggressive and deal more damage. A new ad was added for
        spawning epic monsters. And when your hunter is invaded and is too busy
        trying not to die to ask for help, the game will automatically inform
        allies of the threat. If If you want more details about the changes to
        game mechanics, check out our 2024 Step 3 Developer Blog
      </blockquote>
      <Image
        src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1578798b9f2d896004a598317fd13dad2c25a347-1920x1080.jpg"
        alt="patch"
        className="mt-4 h-full w-full"
        width={846}
        height={476}
      />
    </div>
  )
}
