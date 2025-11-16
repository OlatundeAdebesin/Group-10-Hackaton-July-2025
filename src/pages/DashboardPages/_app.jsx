// pages/DashboardPages/_app.jsx
import React, { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';

export default function AppWrapper({ Component, pageProps }) {
  const [mode, setMode] = useState('buyer');
  return (
    <Layout mode={mode} setMode={setMode}>
      <Component {...pageProps} mode={mode} />
    </Layout>
  );
}
