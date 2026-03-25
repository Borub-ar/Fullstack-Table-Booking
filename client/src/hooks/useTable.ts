import { httpGetAllTables } from '../api/tableRequests';

import { useQuery } from '@tanstack/react-query';

const useTable = () => {
  const tablesQuery = useQuery({
    queryKey: ['tables'],
    queryFn: httpGetAllTables,
  });

  return {
    tables: tablesQuery.data ?? [],
    isLoading: tablesQuery.isPending,
    isError: tablesQuery.isError,
  };
};

export default useTable;
