import DashboardCard from '@/app/components/DashboardCard';
import MagicButton from '@/app/components/MagicButton';
import SummaryTable from '@/app/components/SummaryTable';
import SummaryTableCell from '@/app/components/SummaryTableCell';
import SummaryTableHeader from '@/app/components/SummaryTableHeader';
import { getSummarySales } from '@/lib/api';
import React from 'react';

export default async function Page({}) {
  const data = await new Promise((res) => {
    setTimeout(() => {
      res(getSummarySales());
    }, 4000)
  });

  return (
    <DashboardCard label={<>Sales details<MagicButton/></>}>
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
