import React from 'react';

const Head = (props) => {
  const {title} = props;
  return (
    <div>
      <div>Head</div>
      <div>{title}</div>
    </div>
  );
};

export default React.memo(Head);
