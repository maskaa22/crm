'use client';

import Header from '@/app/components/Header';
import { notFound } from 'next/navigation';
import React, { useEffect } from 'react';

export interface PageProps {
  // params: Promise<{ id: string[] }>;
  params: { id: string };
}

const Page = ({ params }: PageProps) => {
  const { id } = params;

  useEffect(() => {
    const idNumber = Number.parseInt(id);
    if (Number.isNaN(idNumber)) {
      notFound();
    }
  }, [id]);

  return (
    <div>
      <Header>Companies ({id})</Header>
    </div>
  );
};

export default Page;
