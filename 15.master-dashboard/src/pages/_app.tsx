import MasterDashboardComponent from '@/components/MasterDashboardComponent'
import '@/styles/globals.css'
import axios from 'axios';
import type { AppProps } from 'next/app'

export const header = {
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  },
};
axios.defaults.baseURL = 'http://192.168.0.110:8000/api';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MasterDashboardComponent>
      <Component {...pageProps} />
    </MasterDashboardComponent>
  )
}
