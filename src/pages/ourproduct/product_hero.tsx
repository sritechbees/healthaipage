'use client';

import HealthcareProductHero from '@/common/healthcareproducthero';
import Head from 'next/head'; // ✅ Import Head

export default function ProductHeroModern() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Head>
        <title>BeaverHealthAI | Healthcare AI Products</title>
        </Head>

      <div>
        <HealthcareProductHero />
      </div>
    </>
  );
}
