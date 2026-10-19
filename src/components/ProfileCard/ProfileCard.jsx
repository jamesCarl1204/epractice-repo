import Card from '../Card/Card'
import SmartImage from '../SmartImage/SmartImage'
import { VerifiedIcon } from '../Icons/Icons'
import { profile } from '../../data/profile'
import styles from './ProfileCard.module.css'

export default function ProfileCard() {
  return (
    <Card className={styles.card}>
      <div>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <SmartImage src={profile.avatar} alt={profile.name} />
          </div>

          <div>
            <div className={styles.nameRow}>
              <h1 className={styles.name}>{profile.name}</h1>
              <span className={styles.verified} title="Verified Account">
                <VerifiedIcon />
              </span>
            </div>
            <p className={styles.role}>{profile.role}</p>
            <div className={styles.status}>
              <span className={styles.statusDot}></span>
              {profile.status}
            </div>
          </div>
        </div>

        <div className={styles.bio}>
          {profile.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className={styles.stats}>
        {profile.stats.map((stat) => (
          <div key={stat.label}>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}
