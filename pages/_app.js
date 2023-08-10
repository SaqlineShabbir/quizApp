import { ToggleProvider } from '../components/dashboard/provider/ToggleProvider';
import AuthProvider from '../context/AuthProvider';
import '../styles/global.css';
import '../styles/globals.css';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ToggleProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ToggleProvider>
  );
}

export default MyApp;
