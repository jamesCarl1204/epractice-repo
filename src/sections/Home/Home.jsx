import ProfileCard from '../../components/ProfileCard/ProfileCard'
import StackCard from '../../components/StackCard/StackCard'
import ContactCard from '../../components/ContactCard/ContactCard'
import styles from './Home.module.css'

export default function Home() {
  return (
    <section id="home" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <ProfileCard />
        </div>
        <div className={styles.right}>
          <StackCard />
          <ContactCard />
        </div>
      </div>
    </section>
  )
}
