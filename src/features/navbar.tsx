import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {  IconButton, Typography } from '@mui/material';
import Logo from '../assets/logo.svg';
import Travel from '../assets/icons/travel';
import Crescent from '../assets/icons/crescent.tsx';
import {  NavLink } from 'react-router';
import PlaneIcon from '../assets/icons/plane';
import BedIcon from '../assets/icons/bed';
import ExploreIcon from '../assets/icons/explore';
import VacationRentals from '../assets/icons/vacation-rentals';
import MenuGrid from '../assets/icons/menu-grid';
import UserIcon from '../components/user-icon';

function Navbar() {
  return (
    <div className="border-border sticky flex h-16 items-center border-b p-2">
      <IconButton>
        <MenuIcon />
      </IconButton>
      <div className="mt-1 ml-2">
        <img src={Logo} />
      </div>
      <div className="ml-5 hidden space-x-2 md:flex">
        {navlinks.map(({ name, icon: Icon, href }) => (
          <NavLink to={href}>
            <div className="border-border hover:bg-primary-light flex cursor-pointer space-x-2 rounded-full border px-3 py-2">
              {Icon && <Icon />}
              <Typography className="text-sm">{name}</Typography>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="mr-2 ml-auto flex items-center space-x-6">
        <Crescent />
        <MenuGrid />
        <UserIcon />
      </div>
    </div>
  );
}

export default Navbar;

const navlinks: { name: string; icon?: React.ElementType; href: string }[] = [
  { name: 'Travel', icon: Travel, href: '#' },
  { name: 'Explore', icon: ExploreIcon, href: '#' },
  { name: 'Flights', icon: PlaneIcon, href: '/' },
  { name: 'Hotels', icon: BedIcon, href: '#' },
  { name: 'Vacation rentals', icon: VacationRentals, href: '#' },
];
