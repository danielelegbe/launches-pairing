import React from 'react';
import { Box, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useLaunches } from '../hooks/useLaunches';
import LaunchCard from '../components/LaunchCard/LaunchCard';

export default function Home() {
  const { launches, isLoading, error } = useLaunches();
  return (
    <Box p={6}>
      <Heading mb={4}>SpaceX Launches</Heading>
      <SimpleGrid columns={3} spacing={10}>
        {(isLoading || !launches) && !error ? (
          <Spinner />
        ) : (
          launches.docs.map((launch) => <LaunchCard key={launch.id} launch={launch} />)
        )}
      </SimpleGrid>
    </Box>
  );
}
