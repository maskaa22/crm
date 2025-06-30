import React from 'react';

export interface PageProps {
  params: Promise<{ id: string }>;
  // params: { id: string };
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  return (
    <div>
      <div className="py-6 px-10">
        <p>{`Information about company (${id})`}</p>
      </div>
    </div>
  );
};

export default Page;
