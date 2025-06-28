import Header from '@/app/components/Header';

import React from 'react';

export interface PageProps {
  params: Promise<{ id: string }>;
  // params: { id: string };
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  return (
    <div>
      <Header>Companies ({id})</Header>
    </div>
  );
};

export default Page;
