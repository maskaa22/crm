// src/app/components/CompanyDetailsFetcher.tsx
'use client'; // ЦЕЙ компонент - Client Component

import React, { useEffect } from 'react';
import { notFound } from 'next/navigation';

interface CompanyDetailsFetcherProps {
  companyId: number;
}

const CompanyDetailsFetcher = ({ companyId }: CompanyDetailsFetcherProps) => {
  useEffect(() => {
    // Тут ваша оригінальна логіка з useEffect
    if (Number.isNaN(companyId)) {
      notFound(); // Можливо, варто обробляти це на рівні Server Component або тут м'якше
    }
    console.log('Fetching details for Company ID:', companyId);
    // Наприклад, fetch(`http://api.example.com/companies/${companyId}`);
  }, [companyId]);

  return (
    <div>
      <p>Loading company details for ID: {companyId}...</p>
      {/* Тут може бути ваш контент, який залежить від даних, завантажених через useEffect */}
    </div>
  );
};

export default CompanyDetailsFetcher;