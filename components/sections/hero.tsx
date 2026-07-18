import * as motion from "motion/react-client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  CONTAINER_VARIANTS,
  HOVER_TAP_PROPS,
  ITEM_VARIANTS,
} from "@/constants/motion";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <>
      <motion.section
        className="mt-16 flex flex-col gap-6"
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-7xl" variants={ITEM_VARIANTS}>
          <b>Rian Mabait</b>
        </motion.div>

        <motion.div
          className="flex items-center gap-2"
          variants={ITEM_VARIANTS}
        >
          <motion.div {...HOVER_TAP_PROPS}>
            <Button variant="ghost" size="icon">
              <Link
                href="https://www.linkedin.com/in/rian-mabait-a1044626b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </motion.div>
          <motion.div {...HOVER_TAP_PROPS}>
            <Button variant="ghost" size="icon">
              <Link
                href="https://github.com/lueezzzz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div variants={ITEM_VARIANTS}>
          <b>I build with purpose, passion & curiosity</b>
        </motion.div>

        <motion.div variants={ITEM_VARIANTS}>
          <p className="text-justify">
            Full Stack Developer, focused on building scalable web & mobile
            applications. Experienced in owning product delivery from
            development to deployment.
          </p>
        </motion.div>
      </motion.section>
    </>
  );
}
