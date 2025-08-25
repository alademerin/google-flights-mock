import { useQuery } from '@tanstack/react-query';
import { getRequest } from '../configs/base-query';
import { QueryTagEnums } from '../constants/query-tags';
import {
  type AirportApiResponse,
  type searchFlightRequestParams,
  type searchFlightsEverywhereRequestParams,
} from '../types';

const BASE_URL_V1 = '/v1/flights';
const BASE_URL_V2 = '/v2/flights';

export const useGetFlightsQuery = ({ params }: { params?: searchFlightRequestParams }) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryTagEnums.FLIGHTS, params],
    queryFn: async () => {
      return await getRequest({
        endpoint: `${BASE_URL_V1}/searchFlights`,
        config: { params },
      });
    },
    enabled: !!params?.destinationSkyId,
  });

  return { data, isLoading, error, refetch };
};

export const useSearchAirportsQuery = ({ params }: { params?: { query: string } }) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryTagEnums.FLIGHTS, params],
    queryFn: async () => {
      return await getRequest<AirportApiResponse>({
        endpoint: `${BASE_URL_V1}/searchAirport`,
        config: { params },
      });
    },
    enabled: !!params?.query,
  });

  return { data, isLoading, error, refetch };
};

export const useSearchFlightsEverywhereQuery = ({
  params,
}: {
  params?: searchFlightsEverywhereRequestParams;
}) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryTagEnums.FLIGHTS, params],
    queryFn: async () => {
      return await getRequest<AirportApiResponse>({
        endpoint: `${BASE_URL_V2}/searchFlightEverywhere`,
        config: { params },
      });
    },
    enabled: !!params?.originEntityId,
  });

  return { data, isLoading, error, refetch };
};
