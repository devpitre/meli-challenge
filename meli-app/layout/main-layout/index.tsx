import React from 'react';
import Navbar from '@components/navbar';
import BreadCrumb from '@components/breadcrumb';

interface Props {
  children: React.ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <div className="bg-gray-100 w-full h-screen overflow-auto">
      <Navbar />

      <div className="w-full flex flex-col py-4 px-4 gap-2 lg:px-40 lg:gap-4">
        <BreadCrumb />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
