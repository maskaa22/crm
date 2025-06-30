import AddCompanyButton from '@/app/components/AddCompanyButton';
import SearchInput from '@/app/components/SearchInput';
import Toolbar from '@/app/components/Toolbar';
import React from 'react';

export default function Page({}) {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
}
