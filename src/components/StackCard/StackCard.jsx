import Card from '../Card/Card'
import CardHeader from '../CardHeader/CardHeader'
import { StackIcon } from '../Icons/Icons'
import { stack, Tools } from '../../data/stack'
import styles from './StackCard.module.css'


export default function StackCard() {
  return (
    
    <Card className={styles.card}>
      <div>
      <CardHeader title="My Stack" icon={<StackIcon />} />
      <div className={styles.list}>
        {stack.map((item) => (
          <span key={item} className={styles.chip}>
            {item}
          </span>
        ))}
      </div>
      </div>
      <div>
      <CardHeader title="AI Tools i use" icon={<StackIcon />} />
      <div className={styles.list}>
        {Tools.map((item) => (
          <span key={item} className={styles.chip}>
            {item}
          </span>
        ))}
      </div>
      </div>
    </Card>
  )
}
