import '../styles/globals.scss';

import { Header } from '../components/Header';
import { Player } from '../components/Player';


import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.appContainer}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
        <Player />
    </div>
  )
}

export default MyApp