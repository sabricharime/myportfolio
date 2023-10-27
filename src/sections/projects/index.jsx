import { Button, Card, CardBody, CardFooter, Link } from '@nextui-org/react'
import { BiLinkExternal, BiLogoGithub } from 'react-icons/bi'
import { english } from '../../data/siteData'
import { useEffect, useRef } from 'react'
import { useAnimation, useInView, motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, scale: 0, transition: { duration: 0.4 } },
  visible: { opacity: 1, scale: 1 },
}

export default function Projects() {
  const res = useRef(null)
  const controls = useAnimation()
  const inView = useInView(res)
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView])

  return (
    <div className="projects pb-32 font-english">
      <div className="mainProjects ">
        <h2 className="projectsTitle">Projects</h2>
        <p>{english.projects.description}</p>
        <motion.div
          ref={res}
          initial={'hidden'}
          variants={variants}
          animate={controls}
          className="grid  grid-cols-1 md:grid-cols-2 gap-4"
        >
          {english.projects.project.map((item, a) => (
            <Card as={motion.div} key={a} className="cards">
              <CardBody>
                <h2>{item.name}</h2>
              </CardBody>
              <CardFooter className="gap-3 ">
                <Button
                  as={Link}
                  href={item.gitPath}
                  endContent={<BiLogoGithub />}
                  className="text-[16px] border-primary-400 text-primary-400"
                  variant="bordered"
                >
                  Project On Github
                </Button>
                <Button
                  as={Link}
                  href={item.path}
                  endContent={<BiLinkExternal />}
                  className="text-[16px] bg-primary-600"
                  variant="solid"
                >Live Preview</Button>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
