'use client';

import React, { useState } from 'react';
import Button from './Button';
import dynamic from 'next/dynamic';
// import CompanyFormModal from './CompanyFormModal';

const CompanyFormModal = dynamic(() => import('./CompanyFormModal'), {
  ssr: false
});

const AddCompanyButton = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
};

export default AddCompanyButton;
