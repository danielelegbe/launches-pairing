interface Failure {
  altitude: number;
  reason: string;
  time: number;
}

interface Core {
  core: {
    id: string;
    serial: string;
  };
}

interface Payload {
  id: string;
  type: string;
}

export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  cores: Core[];
  success: boolean;
  failures: Failure[];
  links: {
    patch: {
      small: string;
    };
  };
  payloads: Payload[];
}

export interface LaunchesResponse {
  docs: Launch[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number | null;
  offset: number;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
}
