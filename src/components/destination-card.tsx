import { Typography } from '@mui/material';

export interface DestinationProps {
  location: {
    id: string;
    skyCode: string;
    name: string;
    type: 'Nation' | 'City' | 'Airport';
    continent: {
      code: string;
      name: string;
    };
  };
  flightQuotes: {
    cheapest: {
      price: string;
      rawPrice: number;
      direct: boolean;
    };
    direct: {
      price: string;
      rawPrice: number;
      direct: boolean;
    };
  };
  image: {
    url: string;
  };
  flightRoutes: {
    directFlightsAvailable: boolean;
  };
}

interface DestinationCardProps {
  destination: DestinationProps;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="mb-4 flex flex-row items-start rounded-sm md:max-w-[220px] md:flex-col">
      <div className="mt-0 rounded-sm pt-0">
        <img src={destination?.image?.url} className="md:h-[180px] w-[300px] md:w-[220px] rounded-sm" />
      </div>
      <div className="mb-4 ml-2 w-full md:mb-4 md:ml-0 md:py-4">
        <div className="flex w-full justify-between md:mt-2">
          <Typography className="font-medium">{destination?.location?.name}</Typography>
          <Typography className="font-medium">
            {destination?.flightQuotes?.cheapest?.price}
          </Typography>
        </div>
        <div className="mt-1 flex justify-between">
          <Typography className="text-grayText text-sm">Oct 6 - Oct 13</Typography>
        </div>
        <div className="text-grayText mt-1 flex items-center space-x-2">
          <Typography className="text-sm">Nonstop</Typography>
          <span className="bg-grayText h-[3px] w-[3px] rounded-full"></span>
          <Typography className="text-sm">1 Hr</Typography>
        </div>
      </div>
    </div>
  );
}
