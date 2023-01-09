import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import LogoML from '@images/Logo_ML.png';
import SearchIcon from '@icons/ic_Search.png';
import Link from 'next/link';

function Navbar() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    router.push({ pathname: 'items', query: { search } });
  };

  return (
    <div className="flex flex-row w-full bg-primary py-5 px-4 gap-2 lg:px-40  lg:gap-8">
      <Link href="/">
        <Image src={LogoML} alt="meli_logo" width={60} height={35} />
      </Link>
      <form
        onSubmit={onFormSubmit}
        className="flex flex-1 flex-row"
        role="form"
      >
        <input
          type="text"
          className="px-4 text-lg placeholder:text-gray-200 w-full focus:border-none focus:outline-none"
          placeholder="Nunca dejes de buscar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          title="search"
          className="bg-gray-100 p-4 hover:bg-gray-200"
          type="submit"
        >
          <Image src={SearchIcon} alt="search" width={16} height={16} />
        </button>
      </form>
    </div>
  );
}

export default Navbar;
