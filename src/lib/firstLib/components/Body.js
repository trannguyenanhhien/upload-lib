import React from 'react';

const Body = (props) => {
  const {info} = props;
  return (
    <div>
      <div>Body</div>
      <div>{info}</div>
    </div>
  );
};

export default Body;
