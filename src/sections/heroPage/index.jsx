
import SocialMedia, { Email } from '../../components/socialmedia'
import { Button } from '@nextui-org/react'

// eslint-disable-next-line react/prop-types
export default function HeroPage({ one, two, three, des, btn }) {
  return (
    <div className="masterHero font-english">
      <main className="mainHeroPage  font-english grid place-items-start px-8">
        <div className="">
          <p className="text-primary-500 font-english">{one}</p>
          <h1>{two} </h1>
          <h1 className="text-primary-400 mb-5">{three} </h1>
          <p className="max-w-[500px]">{des}</p>
          <Button
            variant="bordered"
            className="border-primary-400 text-primary-400 mt-6 font-english"
          >
            {btn}
          </Button>
        </div>
      </main>

      <SocialMedia />
      <Email />
    </div>
  )
}
