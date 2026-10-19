import { useRef } from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { ChevronLeftIcon, ChevronRightIcon } from '../../components/Icons/Icons'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

const SCROLL_AMOUNT = 400

export default function Projects() {
  const trackRef = useRef(null)

  const scroll = (direction) => {
    trackRef.current?.scrollBy({ left: direction * SCROLL_AMOUNT, behavior: 'smooth' })
  }

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            Explore recent applications, tools, and open-source contributions.
          </p>
        </div>

        <div className={styles.controls}>
          <button className={styles.arrow} onClick={() => scroll(-1)} aria-label="Scroll left">
            <ChevronLeftIcon />
          </button>
          <button className={styles.arrow} onClick={() => scroll(1)} aria-label="Scroll right">
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      <div className={styles.track} ref={trackRef}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
