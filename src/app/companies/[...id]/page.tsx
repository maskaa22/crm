import Header from '@/app/components/Header';
import React from 'react';

export interface PageProps {
  params: Promise<{ id: string[] }>
}


const Page = async ({params}: PageProps) => {

  const { id } = await params;

  return (
    <div>
      <Header>Companies ({String(id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </div>
  );
};

export default Page;
