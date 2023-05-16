import React from 'react';

import { Layout } from '@/layout/Layout';

import IndexFile from '../IndexFile';

export default function Page({ children }) {
  return (
    <IndexFile>
      <Layout>{children}</Layout>
    </IndexFile>
  );
}
