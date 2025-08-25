import React, { useState } from 'react';
import { Typography } from '@mui/material';

// Mock SVG Icons
const CalendarIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" focusable="false" className='bg-none'>
    <path
      d="M8 33.333a2.889 2.889 0 0 1-2.119-.88A2.889 2.889 0 0 1 5 30.332v-21c0-.825.294-1.53.881-2.118A2.889 2.889 0 0 1 8 6.333h1.5v-3h3v3h12v-3h3v3H29c.825 0 1.531.294 2.119.882.587.587.881 1.293.881 2.118v21c0 .825-.294 1.532-.881 2.12a2.889 2.889 0 0 1-2.119.88H8Zm0-3h21v-15H8v15Zm0-18h21v-3H8v3Zm10.5 9c-.425 0-.781-.143-1.069-.43a1.452 1.452 0 0 1-.431-1.07c0-.425.144-.78.431-1.068a1.451 1.451 0 0 1 1.069-.432c.425 0 .781.144 1.069.432.287.287.431.643.431 1.068 0 .425-.144.782-.431 1.07a1.451 1.451 0 0 1-1.069.43Zm-6 0c-.425 0-.781-.143-1.069-.43a1.452 1.452 0 0 1-.431-1.07c0-.425.144-.78.431-1.068a1.451 1.451 0 0 1 1.069-.432c.425 0 .781.144 1.069.432.287.287.431.643.431 1.068 0 .425-.144.782-.431 1.07a1.452 1.452 0 0 1-1.069.43Zm12 0c-.425 0-.781-.143-1.069-.43a1.452 1.452 0 0 1-.431-1.07c0-.425.144-.78.431-1.068a1.451 1.451 0 0 1 1.069-.432c.425 0 .781.144 1.069.432.287.287.431.643.431 1.068 0 .425-.144.782-.431 1.07a1.452 1.452 0 0 1-1.069.43Zm-6 6c-.425 0-.781-.143-1.069-.43a1.452 1.452 0 0 1-.431-1.07c0-.425.144-.78.431-1.068a1.451 1.451 0 0 1 1.069-.432c.425 0 .781.144 1.069.432.287.287.431.643.431 1.068 0 .425-.144.782-.431 1.07a1.451 1.451 0 0 1-1.069.43Zm-6 0c-.425 0-.781-.143-1.069-.43a1.452 1.452 0 0 1-.431-1.07c0-.425.144-.78.431-1.068a1.451 1.451 0 0 1 1.069-.432c.425 0 .781.144 1.069.432.287.287.431.643.431 1.068 0 .425-.144.782-.431 1.07a1.452 1.452 0 0 1-1.069.43Zm12 0c-.425 0-.781-.143-1.069-.43a1.452 1.452 0 0 1-.431-1.07c0-.425.144-.78.431-1.068a1.451 1.451 0 0 1 1.069-.432c.425 0 .781.144 1.069.432.287.287.431.643.431 1.068 0 .425-.144.782-.431 1.07a1.452 1.452 0 0 1-1.069.43Z"
      fill="#1A73E8"
    ></path>
  </svg>
);

const ChartIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" focusable="false">
    <path
      d="M38.333 13.333c0 1.834-1.5 3.334-3.333 3.334a2.833 2.833 0 0 1-.85-.117l-5.933 5.917c.083.266.116.566.116.866 0 1.834-1.5 3.334-3.333 3.334a3.343 3.343 0 0 1-3.333-3.334c0-.3.033-.6.116-.866l-4.25-4.25a2.944 2.944 0 0 1-.866.116c-.3 0-.6-.033-.867-.116l-7.583 7.6c.083.266.116.55.116.85C8.333 28.5 6.833 30 5 30a3.343 3.343 0 0 1-3.333-3.333c0-1.834 1.5-3.334 3.333-3.334.3 0 .583.034.85.117l7.6-7.583a2.946 2.946 0 0 1-.117-.867c0-1.833 1.5-3.333 3.334-3.333C18.5 11.667 20 13.167 20 15c0 .3-.033.6-.117.867l4.25 4.25C24.4 20.033 24.7 20 25 20c.3 0 .6.033.867.117l5.916-5.934a2.833 2.833 0 0 1-.116-.85C31.667 11.5 33.167 10 35 10c1.833 0 3.333 1.5 3.333 3.333Z"
      fill="#1A73E8"
    ></path>
  </svg>
);

const PriceIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" focusable="false">
    <g clip-path="url(#a)">
      <path
        d="M24.667 21.333v4.5h-12v-10.5c0-3.315 2.685-6 6-6 1.275 0 2.46.39 3.42 1.08l2.145-2.145a8.805 8.805 0 0 0-3.315-1.635v-1.05a2.247 2.247 0 0 0-2.25-2.25 2.247 2.247 0 0 0-2.25 2.25v1.05a8.98 8.98 0 0 0-6.75 8.7v10.5h-3v3h24v-3h-3v-4.5h-3Zm-6 12c1.65 0 3-1.35 3-3h-6c0 1.65 1.35 3 3 3Zm18-21h-4.5v-4.5h-3v4.5h-4.5v3h4.5v4.5h3v-4.5h4.5v-3Z"
        fill="#1A73E8"
      ></path>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h40v40H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

const tools = [
  {
    key: 'cheapest-days',
    icon: <CalendarIcon />,
    title: 'Find the cheapest days to fly',
    description: 'The Date grid and Price graph make it easy to find the best flight deals',
    detail: (
      <>
        <Typography className="text-2xl">Find the cheapest days to fly</Typography>
        <Typography className="text-sm">
          If your travel plans are flexible, use the form above to start searching for a specific
          trip. Then, play around with the Date grid and Price graph options on the Search page to
          find the cheapest days to fly.
        </Typography>
        <div className="w-full">
          <div className="">
            <img
              src="https://www.gstatic.com/flights/app/lp/dates_benefits_light.svg"
              alt="Mock price graph UI"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </>
    ),
  },
  {
    key: 'price-insights',
    icon: <ChartIcon />,
    title: 'Know when to book with price insights',
    description:
      'Price history and trend data show you the best time to book your airline ticket to get the cheapest price for your flight',
    image: 'https://www.gstatic.com/flights/app/lp/price_insights_benefits_light.svg',
    detail: (
      <>
        <Typography className="text-2xl">Know when to book with price insights</Typography>
        <Typography className="text-sm">
          Real-time insights can tell you if a ticket price is lower or higher than usual, and if
          the fare you’re seeing is a good price. So, you don’t have to worry about paying too much
          for a flight or missing out on the cheapest time to book. On some routes, you might also
          see historical data that helps you better understand how flight prices vary over time.
        </Typography>
        <div className="w-full">
          <div className="">
            <img
              src="https://www.gstatic.com/flights/app/lp/price_insights_benefits_light.svg"
              alt="Mock price insights UI"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </>
    ),
  },
  {
    key: 'track-prices',
    icon: <PriceIcon />,
    title: 'Track flight prices for a trip',
    description:
      'Not ready to book yet? Observe price changes for a route or flight and get notified when prices drop.',
    detail: (
      <>
        <Typography className="text-2xl">Track flight prices for a trip</Typography>
        <Typography className="text-sm">
          Real-time insights can tell you if a ticket price is lower or higher than usual, and if
          the fare you’re seeing is a good price. So, you don’t have to worry about paying too much
          for a flight or missing out on the cheapest time to book. On some routes, you might also
          see historical data that helps you better understand how flight prices vary over time.
        </Typography>
        <div className="w-full">
          <div className="">
            <img
              src="https://www.gstatic.com/flights/app/lp/tracking_prices_benefits_light.svg"
              alt="Mock price tracking UI"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </>
    ),
  },
];

const UsefulToolsSection: React.FC = () => {
  const [activeTool, setActiveTool] = useState<string | null>('cheapest-days');

  const active = tools.find((t) => t.key === activeTool);

  return (
    <div className="grid flex-col space-y-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:flex-row md:space-y-0 md:space-x-8">
      <div className="space-y-4">
        {tools.map((tool) => (
          <div
            key={tool.key}
            className={`flex min-h-[150px] cursor-pointer flex-row items-start space-x-4 rounded-2xl border bg-[#E8F0FE80] p-4 ${
              activeTool === tool.key ? 'border-blue-400' : 'border-[#d2e3fc]'
            }`}
            onClick={() => setActiveTool(tool.key)}
          >
            <div className="rounded-lg bg-blue-100 p-2">{tool.icon}</div>
            <div>
              <Typography className="font-medium">{tool.title}</Typography>
              <Typography color="textSecondary" className="text-sm">
                {tool.description}
              </Typography>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-1 flex-col items-center space-y-4 rounded-2xl md:items-start">
        {active ? (
          <>
            <div className="flex flex-col space-y-4">{active.detail}</div>
          </>
        ) : (
          <div className="flex flex-col space-y-4">
            <Typography variant="h5" className="mb-4 font-sans">
              Insightful tools help you choose your trip dates
            </Typography>
            <Typography variant="body1" className="mb-4 font-sans">
              If your travel plans are flexible, use the form above to start searching for a
              specific trip. Then, play around with the <b>Date grid</b> and <b>Price graph</b>{' '}
              options on the Search page to find the cheapest days to fly and book your tickets.
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsefulToolsSection;
