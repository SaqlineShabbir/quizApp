import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import AuthProvider from '../context/AuthProvider';
import { store } from '../redux/app/store';
import '../styles/globals.css';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <AuthProvider>
      <SessionProvider session={session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </AuthProvider>
  );
}

export default MyApp;
