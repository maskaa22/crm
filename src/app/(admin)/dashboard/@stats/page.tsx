import StatCard, { StatCardType } from '@/app/components/stat-card/stat-card';
import { getSummaryStats, SummaryStats } from '@/lib/api';
import Link from 'next/link';
import React from 'react';

const labelByStat: Record<keyof SummaryStats, string> = {
  promotions: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

export default async function Page({}) {
  const data = await getSummaryStats({
    next: {
      revalidate: 5
    }
  });

  return (
    <div className="grid grid-cols-12 gap-5">
      {(Object.keys(labelByStat) as (keyof SummaryStats)[]).map((key) => (
        <Link href={`/dashboard/${key}`}  key={key} className="col-span-3">
          <StatCard
            type={StatCardType.Gradient}
            label={labelByStat[key]}
            counter={data[key]}
          />
        </Link>
      ))}
    </div>
  );
}
