'use client';
import CompanyForm from '@/app/components/CompanyForm';
import React from 'react';

const page = () => {
  return (
    <div className="py-6 px-10">
      <CompanyForm onSubmit={console.log} />
    </div>
  );
};

export default page;
