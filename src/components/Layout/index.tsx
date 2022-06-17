import type { NextPage } from 'next'
import styles from '../../styles/Layout.module.css'
import NavBar from './Header/Header'
import Footer from './Footer'

type Props = {
  children: JSX.Element
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
