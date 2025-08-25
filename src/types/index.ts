export interface searchFlightRequestParams {
  journeyType: string;
  cabinClass: string;
  originSkyId?: string;
  destinationSkyId?: string;
  originEntityId?: string;
  destinationEntityId?: string;
  date: string;
  returnDate: string | null;
  adults: number;
  children?: number;
  infants?: number;
  infantsOnLap?: number;
}
export interface searchFlightsEverywhereRequestParams {
  journeyType: string;
  cabinClass: string;
  originEntityId?: string;
}

export interface Airport {
  presentation: {
    title: string;
    suggestionTitle: string;
    subtitle: string;
  };
  navigation: {
    entityId: string;
    entityType: string;
    localizedName: string;
    relevantFlightParams: {
      skyId: string;
      entityId: string;
      flightPlaceType: string;
      localizedName: string;
    };
    relevantHotelParams: {
      entityId: string;
      entityType: string;
      localizedName: string;
    };
  };
}

export interface AirportApiResponse {
  status: boolean;
  timestamp: number;
  data: Airport[];
}
