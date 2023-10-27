import { Link } from '@nextui-org/react'

import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className=" gap-4 rotate-90  fixed left-0 bottom-20 hidden lg:flex">
      <Link className="icons" href="https://github.com/sabricharime">
        <AiFillGithub />
      </Link>
      <Link className="icons" href="https://twitter.com/skisnake210">
        <AiOutlineTwitter />
      </Link>
      <Link className="icons" href="https://www.linkedin.com/in/sabri-charime/">
        <AiFillLinkedin />
      </Link>
    </div>
  )
}
export const Email = () => {
  return (
    <div className="hidden lg:flex gap-4 rotate-90  fixed right-0 bottom-24 font-english">
      <Link className="mail" href="mailto:sabricharim7@gmail.com">
        sabricharim7@gmail.com
      </Link>
    </div>
  )
}

export default SocialMedia
