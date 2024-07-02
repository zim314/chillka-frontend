'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import useMediaQuery from '@hooks/use-media-query';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import SearchBarDesktop from './SearchBarDesktop';
import SearchBarMobile from './SearchBarMobile';
import SearchProvider from './SearchProvider';
import { categories, locations } from './fields/utils';

//
const debugMode = false;

type SearchBarProps = {
  className: string;
};
export const searchSchema = z.object({
  keyword: z.string().optional(),
  location: z.string().optional(),
  category: z.string().optional(),
});

export type SearchFormValues = z.infer<typeof searchSchema>;

const createQueryString = (data: {
  keyword: string;
  location: string;
  category: string;
}) => {
  const params = new URLSearchParams();
  Object.entries(data).forEach(([key, value]) => {
    params.set(key, value);
  });
  return params.toString();
};

const SearchBar = ({ className = '' }: SearchBarProps) => {
  const { matches: isMobile } = useMediaQuery();
  const router = useRouter();

  const handleSearchSubmit = async (data: any) => {
    const queryString = createQueryString(data);
    router.push(`/search?${queryString}`);
  };

  return (
    <SearchProvider
      defaultValues={{ keyword: '', location: '', category: '' }}
      resolver={zodResolver(searchSchema)}
    >
      {isMobile ? (
        <SearchBarMobile
          className=""
          locations={locations}
          categories={categories}
          onSearchSubmit={handleSearchSubmit}
          debugMode={debugMode}
        />
      ) : (
        <SearchBarDesktop
          className={className}
          locations={locations}
          categories={categories}
          onSearchSubmit={handleSearchSubmit}
        />
      )}
    </SearchProvider>
  );
};

export default SearchBar;
