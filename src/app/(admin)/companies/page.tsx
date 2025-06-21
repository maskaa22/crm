import AddCompanyButton from '@/app/components/AddCompanyButton';
import CompanyRow from '@/app/components/CompanyRow';
import CompanyTable from '@/app/components/CompanyTable';
import Header from '@/app/components/Header';
import SearchInput from '@/app/components/SearchInput';
import { Status } from '@/app/components/StatusLabel';
import Toolbar from '@/app/components/Toolbar';
import React from 'react';

const Page = () => {
  return (
    <div>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category="Products"
          company="Costco"
          status={Status.Pending}
          promotion={true}
          country="USA"
          joinedDate="02.19.2025"
        />
      </CompanyTable>
    </div>
  );
};

export default Page;
