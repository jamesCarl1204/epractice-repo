import { useEffect, useRef, useState } from 'react'
import Skeleton from '../Skeleton/Skeleton'
import styles from './SmartImage.module.css'

// Skeleton habang nilo-load ang image. Ang parent ay dapat may position: relative.
export default function SmartImage({ src, alt, className = '' }) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef(null)

  // Kung na-cache na ang image, hindi na magfa-fire ang onLoad.
  useEffect(() => {
    const img = imgRef.current
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true)
  }, [src])

  return (
    <>
      {!loaded && <Skeleton className={styles.fill} />}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`${className} ${styles.img} ${loaded ? styles.visible : ''}`}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </>
  )
}
