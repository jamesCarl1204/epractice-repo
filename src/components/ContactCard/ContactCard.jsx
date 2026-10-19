import Card from '../Card/Card'
import CardHeader from '../CardHeader/CardHeader'
import { MailIcon } from '../Icons/Icons'
import { contacts } from '../../data/contacts'
import styles from './ContactCard.module.css'

export default function ContactCard() {
  return (
    <Card className={styles.card}>
      <CardHeader title="Contact" icon={<MailIcon />} />
      <ul className={styles.list}>
        {contacts.map((c) => (
          <li key={c.label}>
            <a
              href={c.href}
              className={styles.row}
              {...(c.external && { target: '_blank', rel: 'noreferrer' })}
            >
              <span className={styles.label}>{c.label}</span>
              <span className={styles.value}>{c.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </Card>
  )
}
