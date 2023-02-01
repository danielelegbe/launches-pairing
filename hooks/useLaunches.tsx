import useSWR from 'swr';
import { LaunchesResponse } from '../interfaces/LaunchesResponse';

export const useLaunches = () => {
  const { data, isLoading, error } = useSWR<LaunchesResponse>('launches', () =>
    fetch('https://api.spacexdata.com/v5/launches/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        options: {
          limit: 10,
          select: {
            name: 1,
            date_utc: 1,
            links: {
              patch: {
                small: 1,
              },
            },
            cores: {
              core: 1,
            },
            success: 1,
            failures: 1,
          },
          populate: [
            {
              path: 'payloads',
              select: {
                id: 1,
                type: 1,
              },
            },
            {
              path: 'cores',
              populate: [
                {
                  path: 'core',
                  select: {
                    serial: 1,
                  },
                },
              ],
            },
          ],
        },
      }),
    }).then((res) => res.json())
  );
  return {
    launches: data,
    isLoading,
    error,
  };
};
