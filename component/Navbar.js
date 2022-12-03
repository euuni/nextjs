import Link from "next/link"
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">
          <a>갱쓰 집</a>
        </Link>
        <Link href="/profile">
          <a> 갱쓰 소개하지 </a>
        </Link>
        <Link href="/hobby">
          <a>갱쓰 취미 ⌯'▾'⌯</a>
        </Link>
        <Link href="/love">
          <a>갱쓰가사음</a>
        </Link>
        <Link href="/travel">
          <a>갱쓰여행</a>
        </Link>
      </div>
    </div>
  )
}
