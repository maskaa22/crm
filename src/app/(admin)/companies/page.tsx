import CompanyRow from '@/app/components/CompanyRow';
import CompanyTable from '@/app/components/CompanyTable';

import { Status } from '@/app/components/StatusLabel';
import { getCompanies } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import React from 'react';

const Page = async() => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies({cache: 'no-store'}),
    staleTime: 10*1000
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <CompanyTable/>
    </HydrationBoundary>
    // <CompanyTable>
    //   <CompanyRow
    //     id={1}
    //     category="Products"
    //     company="Costco"
    //     status={Status.Pending}
    //     promotion={true}
    //     country="USA"
    //     joinedDate="02.19.2023"
    //   />
    // </CompanyTable>
  );
};

export default Page;
