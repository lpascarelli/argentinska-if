import { FaHandshake, FaMedal } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { PiHandsClappingFill } from 'react-icons/pi';
import { GiThreeFriends } from 'react-icons/gi';
import { IconType } from 'react-icons';

export enum THECLUB {
  TheClub = 'the-club',
  AboutUs = 'about-us',
  OurValues = 'our-values',
}

export const ourValuesBlockIcons: { [key in number]: IconType } = {
  0: FaHandshake,
  1: IoIosPeople,
  2: FaMedal,
  3: PiHandsClappingFill,
  4: GiThreeFriends,
};