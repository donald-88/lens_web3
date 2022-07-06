import styles from '../styles/globals.css'
import Layout from '../components/Layout'
import { Provider } from 'urql'
import { client } from './api/api'


function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
