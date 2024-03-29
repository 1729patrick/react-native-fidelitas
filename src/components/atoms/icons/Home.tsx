import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import StyleGuide from '../../../util/StyleGuide';

export const ActiveHome = React.memo(() => {
  return (
    <Svg height="20" width="20" viewBox="0 0 512 512">
      <Path
        fill={StyleGuide.palette.app}
        d="M237.3 16c-3.9 1-8.6 2.6-10.5 3.5-19.9 10-179.4 98.1-183.6 101.5-11 8.8-19.7 22.1-24.4 37l-2.3 7.5v272l2.3 7.5c8.3 26.2 27.1 44.5 52.7 51 7.7 2 10.9 2 184.2 2 159 0 177.1-.2 183.6-1.6 24.8-5.6 45-24.1 53.5-48.9l2.7-8 .3-135.2c.3-151.9.7-142.9-7.2-158.8-5.4-10.9-13.1-20.5-21.3-26.4-5.6-4-140.4-77.8-172.9-94.6-9-4.7-16.6-7.8-21.2-8.9-9.8-2.2-26.6-2-35.9.4zm32.2 32c2.8 1 43.5 22.7 90.5 48.2 63.4 34.5 86.9 47.7 90.7 51.2 3.6 3.3 6.4 7.1 9 12.4l3.8 7.6.3 131c.3 143.2.5 137.3-5.5 147.5-3.9 6.6-11 13-18.3 16.5l-6.5 3.1h-355l-6.5-3.1c-7.3-3.5-14.4-9.9-18.3-16.5-5.9-10.1-5.7-4.5-5.7-144.9 0-81.1.4-130.1 1-132.8 1.8-7.6 5.3-13.6 11.5-19.7 5.5-5.5 12.8-9.7 93-53.2C202 69 242.5 47.7 245 47.1c9.8-2.3 16.1-2 24.5.9z"
      />
      <Path
        fill={StyleGuide.palette.app}
        d="M172 333.1c-3.2 1.3-6.8 4.7-8.6 8.1-2.9 5.6-.9 17.2 5.6 31.4 9.4 20.9 31.2 41.3 52.4 49.1 14.9 5.5 35 7.7 49.6 5.4 10.8-1.7 25.8-7.1 35.1-12.7 9.5-5.7 20.8-15.9 27.5-24.7 8.7-11.5 17.4-32.5 17.4-42.1 0-10.7-11.6-18.3-21.6-14.1-6.3 2.6-8.1 5.1-11.3 15.4-1.7 5.3-4.7 12.5-6.8 16.1-7.4 12.5-21.2 23.6-35.3 28.1-9.1 3-25.4 3.7-34 1.5-23.4-6-41.5-23.5-47.3-45.9-2.2-8.2-4.6-11.9-9.7-14.5-4.7-2.3-8.9-2.7-13-1.1z"
      />
    </Svg>
  );
});

export const InactiveHome = React.memo(() => {
  return (
    <Svg height="20" width="20" viewBox="0 0 512 512">
      <Path
        d="M237.3 16c-3.9 1-8.6 2.6-10.5 3.5-19.9 10-179.4 98.1-183.6 101.5-11 8.8-19.7 22.1-24.4 37l-2.3 7.5v272l2.3 7.5c8.3 26.2 27.1 44.5 52.7 51 7.7 2 10.9 2 184.2 2 159 0 177.1-.2 183.6-1.6 24.8-5.6 45-24.1 53.5-48.9l2.7-8 .3-135.2c.3-151.9.7-142.9-7.2-158.8-5.4-10.9-13.1-20.5-21.3-26.4-5.6-4-140.4-77.8-172.9-94.6-9-4.7-16.6-7.8-21.2-8.9-9.8-2.2-26.6-2-35.9.4zm32.2 32c2.8 1 43.5 22.7 90.5 48.2 63.4 34.5 86.9 47.7 90.7 51.2 3.6 3.3 6.4 7.1 9 12.4l3.8 7.6.3 131c.3 143.2.5 137.3-5.5 147.5-3.9 6.6-11 13-18.3 16.5l-6.5 3.1h-355l-6.5-3.1c-7.3-3.5-14.4-9.9-18.3-16.5-5.9-10.1-5.7-4.5-5.7-144.9 0-81.1.4-130.1 1-132.8 1.8-7.6 5.3-13.6 11.5-19.7 5.5-5.5 12.8-9.7 93-53.2C202 69 242.5 47.7 245 47.1c9.8-2.3 16.1-2 24.5.9z"
        fill={StyleGuide.palette.secondary}
      />
      <Path
        d="M172 333.1c-3.2 1.3-6.8 4.7-8.6 8.1-2.9 5.6-.9 17.2 5.6 31.4 9.4 20.9 31.2 41.3 52.4 49.1 14.9 5.5 35 7.7 49.6 5.4 10.8-1.7 25.8-7.1 35.1-12.7 9.5-5.7 20.8-15.9 27.5-24.7 8.7-11.5 17.4-32.5 17.4-42.1 0-10.7-11.6-18.3-21.6-14.1-6.3 2.6-8.1 5.1-11.3 15.4-1.7 5.3-4.7 12.5-6.8 16.1-7.4 12.5-21.2 23.6-35.3 28.1-9.1 3-25.4 3.7-34 1.5-23.4-6-41.5-23.5-47.3-45.9-2.2-8.2-4.6-11.9-9.7-14.5-4.7-2.3-8.9-2.7-13-1.1z"
        fill={StyleGuide.palette.secondary}
      />
    </Svg>
  );
});
