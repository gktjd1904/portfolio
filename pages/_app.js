import '@/styles/globals.scss'
import Header from './src/Header'

export default function App({ Component, pageProps }) {

  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  )
}
