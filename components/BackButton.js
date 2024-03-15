import React from 'react';
import { ArrowLeft } from 'phosphor-react';
import { useRouter } from 'next/router'

export const BackButton = () => {
  const router = useRouter();

  return (
    <button className="inline-flex hover:text-indigo-800" onClick={() => router.back()}>
      <ArrowLeft size={24} />
      <p className='pt-0'>BACK</p>
    </button>
  );
};
