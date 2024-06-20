import React from 'react';

export const initializeTimes = (timesArray) => {
  return timesArray.map(time => (
    <option key={time} value={time} label={time} />
  ));
};