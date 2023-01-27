import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { ToggleProvider } from '../components/dashboard/provider/ToggleProvider';
import AuthProvider from '../context/AuthProvider';
import { store } from '../redux/app/store';
import '../styles/globals.css';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ToggleProvider>
      <AuthProvider>
        <SessionProvider session={session}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </SessionProvider>
      </AuthProvider>
    </ToggleProvider>
  );
}

export default MyApp;
