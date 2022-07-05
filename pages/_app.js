import '../styles/globals.css'
import NProgress from 'nprogress'
import Router from 'next/router'
import Layout from "./components/layout"
import { Provider } from 'react-redux'
import store from "../reducer/store"

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
}

export default MyApp
