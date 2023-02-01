import { Launch } from '../../../../interfaces/LaunchesResponse';

export const mockLaunch: Launch = {
  links: {
    patch: {
      small: 'https://images2.imgbox.com/94/f2/NN6Ph45r_o.png',
    },
  },
  success: false,
  failures: [
    {
      time: 33,
      altitude: null,
      reason: 'merlin engine failure',
    },
  ],
  payloads: [
    {
      type: 'Satellite',
      id: '5eb0e4b5b6c3bb0006eeb1e1',
    },
  ],
  name: 'FalconSat',
  date_utc: '2006-03-24T22:30:00.000Z',
  cores: [
    {
      core: {
        serial: 'Merlin1A',
        id: '5e9e289df35918033d3b2623',
      },
    },
  ],
  id: '5eb87cd9ffd86e000604b32a',
};
