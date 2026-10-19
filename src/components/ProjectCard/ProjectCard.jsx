import Card from '../Card/Card'
import SmartImage from '../SmartImage/SmartImage'
import { ArrowRightIcon } from '../Icons/Icons'
import styles from './ProjectCard.module.css'
import img from './image.png'
export default function ProjectCard({ project }) {
  const { title, tag, image, description, tech, linkLabel, href } = project

  return (
    <Card className={styles.card}>
      <div className={styles.project}>
        <div className={styles.imageWrap}>
          <SmartImage src={image} alt={title} className={styles.image} />
          <span className={styles.tag}>{tag}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.footer}>
        <div className={styles.tech}>
          {tech.map((t) => (
            <span key={t} className={styles.chip}>
              {t}
            </span>
          ))}
        </div>
        <a href={href} className={styles.link}>
          <span>{linkLabel}</span>
          <ArrowRightIcon />
        </a>
      </div>
    </Card>
  )
}
