import React from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';

interface Props {
  timeStamp: string;
}

const TimeAgo = ({ timeStamp }: Props) => {
  let timeAgo = '';
  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <div>
      <span>
        &nbsp; <i>{timeAgo}</i>
      </span>
    </div>
  );
};

export default TimeAgo;
