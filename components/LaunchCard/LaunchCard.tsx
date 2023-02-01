import React from 'react';
import { Card, CardBody } from '@chakra-ui/card';
import { Box, Image, Text } from '@chakra-ui/react';
import { Launch } from '../../interfaces/LaunchesResponse';

interface LaunchCardProps {
  launch: Launch;
}

const LaunchCard: React.FC<LaunchCardProps> = ({ launch }) => {
  return (
    <Card mb={4} data-testid={`launch-card-${launch.id}`}>
      <CardBody>
        <Image
          data-testid="launch-image"
          margin="auto"
          src={launch.links.patch.small}
          boxSize="150px"
          alt={launch.name}
        />
        <Box my={2}>
          <Text fontSize="lg" fontWeight="bold" data-testid="launch-name">
            {launch.name}
          </Text>
          <Text fontSize="sm" data-testid="launch-core-serial">
            Serial: {launch.cores[0].core.serial}
          </Text>
          <Text color="blue.600" data-testid="launch-date" fontSize="sm">
            {new Date(launch.date_utc).toLocaleString()}
          </Text>
        </Box>
        <Box>
          <Text fontWeight="bold">Payloads:</Text>
          {launch.payloads.map((payload) => (
            <Box data-testid="launch-payloads" key={payload.id}>
              <Text fontSize="sm">
                <Text fontWeight="bold" display="inline">
                  ID:{' '}
                </Text>
                {payload.id}
              </Text>
              <Text fontSize="sm">
                <Text fontWeight="bold" display="inline">
                  Type:{' '}
                </Text>
                {payload.type}
              </Text>
            </Box>
          ))}
        </Box>
        <Box data-testid="launch-success" my={2}>
          <Text fontWeight="bold">Success: {launch.success ? 'True' : 'False'}</Text>
          {launch.failures.map((failure, index) => (
            <Box key={index}>
              <Text fontSize="sm">
                <Text fontWeight="bold" display="inline">
                  Failure reason:{' '}
                </Text>
                {failure.reason}
              </Text>
              <Text fontSize="sm">
                <Text fontWeight="bold" display="inline">
                  Time:{' '}
                </Text>
                {failure.time}
              </Text>
            </Box>
          ))}
        </Box>
      </CardBody>
    </Card>
  );
};

export default LaunchCard;
