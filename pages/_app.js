import { Provider } from 'react-redux';
import { ToggleProvider } from '../components/dashboard/provider/ToggleProvider';
import AuthProvider from '../context/AuthProvider';
import { store } from '../redux/app/store';
import '../styles/global.css';
import '../styles/globals.css';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ToggleProvider>
      <AuthProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AuthProvider>
    </ToggleProvider>
  );
}

export default MyApp;
