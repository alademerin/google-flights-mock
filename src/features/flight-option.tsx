import  { useState } from 'react';
import { Typography, IconButton, Collapse, Divider, Chip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export interface FlightOptionProps {
  emissions: string;
  price: string;
  layovers?: string[];
  legs?: any[];
  isCheapest?: boolean; // 🔑 added flag
}

function formatTime(date: string) {
  return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function formatDuration(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h} hr ${m} min`;
}

export default function FlightOption({
  emissions,
  price,
  layovers = [],
  legs = [],
  isCheapest = false,
}: FlightOptionProps) {
  const [open, setOpen] = useState(false);

  const firstLeg = legs[0];
  const lastLeg = legs[legs.length - 1];

  const totalDuration = legs.reduce((acc, l) => acc + (l.durationInMinutes || 0), 0);
  const totalStops = legs.reduce((acc, l) => acc + (l.stopCount || 0), 0);

  return (
    <div className="border-border border-b py-5">
      {/* Header Summary */}
      <div className="items-center justify-between px-5 md:flex">
        <div className="flex space-x-2">
          <div>
            {firstLeg?.carriers?.marketing?.[0]?.logoUrl && (
              <img
                src={firstLeg.carriers.marketing[0].logoUrl}
                className="h-[35px] w-[35px]"
                alt={firstLeg.carriers.marketing[0].name}
              />
            )}
          </div>
          <div>
            <Typography className="font-medium">
              {formatTime(firstLeg?.departure)} - {formatTime(lastLeg?.arrival)}
            </Typography>
            <Typography className="text-grayText text-xs">
              {firstLeg?.carriers?.marketing?.[0]?.name}
            </Typography>
          </div>
        </div>

        <div className="flex space-x-8">
          <div>
            <Typography className="font-medium">{formatDuration(totalDuration)}</Typography>
            <Typography className="text-grayText text-xs">
              {firstLeg?.origin?.displayCode} - {lastLeg?.destination?.displayCode}
            </Typography>
          </div>
          <div>
            <Typography className="font-medium">
              {totalStops > 0 ? `${totalStops} Stop${totalStops > 1 ? 's' : ''}` : 'Direct'}
            </Typography>
            {layovers?.length > 0 && (
              <Typography className="text-grayText text-xs">{layovers.join(', ')}</Typography>
            )}
          </div>
          <div>
            <Typography className="font-medium">{emissions}</Typography>
            <Typography className="text-grayText text-xs">Avg Emissions</Typography>
          </div>
          <div className="flex">
            <div className="flex items-center text-end">
              <div>
                <Typography
                  className={`font-medium ${isCheapest ? 'text-green-600' : ''}`} // 🔑 cheapest is green
                >
                  {price}
                </Typography>
                <Typography className="text-grayText text-xs">round trip</Typography>
              </div>
            </div>
            <IconButton onClick={() => setOpen((prev) => !prev)}>
              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </div>
        </div>
      </div>

      {/* Collapsible details */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider sx={{ my: 2 }} />

        {legs.map((leg: any, index: number) => (
          <div key={leg.id || index}>
            {/* Flight segment */}
            <div className="mb-6 justify-between px-16 md:flex">
              <div>
                <div className="flex">
                  {/* Timeline dots */}
                  <div className="flex flex-col items-center py-2">
                    <span className="border-border h-[10px] w-[10px] rounded-full border-2" />
                    <span className="border-border h-full rounded-full border-r-4 border-dotted" />
                    <span className="border-border h-[10px] w-[10px] rounded-full border-2" />
                  </div>

                  {/* Flight times */}
                  <div className="px-2">
                    <Typography variant="body1">
                      {formatTime(leg.departure)} · {leg.origin.displayCode}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Travel time: {formatDuration(leg.durationInMinutes)}
                      {leg.isOvernight && (
                        <Chip
                          size="small"
                          label="Overnight"
                          color="warning"
                          variant="outlined"
                          sx={{ ml: 1 }}
                        />
                      )}
                    </Typography>
                    <Typography variant="body1" className="mt-2">
                      {formatTime(leg.arrival)} · {leg.destination.displayCode}
                    </Typography>
                  </div>
                  <Divider sx={{ my: 1 }} />
                </div>

                {/* Flight details */}
                <div className="mt-4 md:ml-4">
                  <Typography variant="caption" color="text.secondary">
                    {leg.carriers.marketing[0]?.name} · {leg.carriers.marketing[0]?.id} ·{' '}
                    {leg.flightNumber || ''}
                  </Typography>
                </div>
              </div>

              {/* Amenities / extra info */}
              <div className="flex flex-col md:justify-between">
                <div className="spac-x-2 flex">
                  <Typography variant="caption" color="text.secondary">
                    Average legroom (31 in)
                  </Typography>
                </div>
                <Typography variant="caption" color="text.secondary">
                  Wi-Fi for a fee
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  On Demand Video
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Emissions estimate: ~
                  {Math.round(emissions ? parseInt(emissions) / legs.length : 0)} CO2e
                </Typography>
              </div>
            </div>

            {/* {index < legs.length - 1 && ( */}
            {/*   <div className="border-border mb-4 ml-20 border-y py-4"> */}
            {/*     <Typography className="text-sm"> */}
            {/*       Layover in {leg.destination.city} ({leg.destination.displayCode}) */}
            {/*     </Typography> */}
            {/*   </div> */}
            {/* )} */}
          </div>
        ))}
      </Collapse>
    </div>
  );
}
