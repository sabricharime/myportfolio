import { Button, Link } from '@nextui-org/react'
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export default function Contact() {
  return (
    <div className="container max-w-screen-xl mx-auto grid place-items-center pb-32">
      <div className="max-w-5xl w-full px-8 flex flex-col gap-4 ">
        <h2 className="contact">Contact Me </h2>
        <p>
          <span className="text-primary-400"> Phone:</span> +213668038264
        </p>
        <p>
          <span className="text-primary-400"> Gmail:</span>{' '}
          sabricharim7@gmail.com
        </p>

        <div className="flex gap-4">
          <Link
            className=" text-primary-400 text-2xl"
            href="https://github.com/sabricharime"
          >
            <AiFillGithub />
          </Link>
          <Link
            className=" text-primary-400 text-2xl"
            href="https://twitter.com/skisnake210"
          >
            <AiOutlineTwitter />
          </Link>
          <Link
            className=" text-primary-400 text-2xl"
            href="https://www.linkedin.com/in/sabri-charime/"
          >
            <AiFillLinkedin />
          </Link>
        </div>

        <Button
          as={Link}
          variant="bordered"
          className=" w-fit border-primary-500 text-primary-500"
        >
          Get In Touch
        </Button>
      </div>
    </div>
  )
}
