// import { Button } from "@nextui-org/react";
import { Image } from '@nextui-org/react'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const squareVariants = {
  visible: { opacity: 1, scale: 1, y:0, transition: { duration: 0.3 } },
  hidden: { opacity: 0, scale: 0 },
}
// eslint-disable-next-line react/prop-types
export default function AboutMe({english}) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView])

  return (
    <div id="about" className=" about font-english">
      <div className="content">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
          className={`flex-1 `}
        >
          <h2 className="aboutTitle">{english.about.title}</h2>
          <p>{english.about.description}</p>
          <div className="p-1" />
          <p className="mb-4">{english.about.technology.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-5">
            {english.about.technology.list.map((item, idx) => (
              <span className="skills" key={idx}>
                {item}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
          className="flex-1 grid place-items-center sabri"
        >
          <Image src="/1.jpg" className="w-[300px]" isZoomed isBlurred />
        </motion.div>
      </div>
    </div>
  )
}
