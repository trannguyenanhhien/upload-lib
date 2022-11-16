import React, {useState} from 'react';
import Body from './components/Body';
import Head from './components/Head';
import axios from 'axios';

const FirstLib = (props) => {
  const {title, info} = props;
  const getApi = () => {
    axios.get('https://test-chatbot.pvssolution.com/chat/test').then((res) => console.log('get nè', res));
  };
  return (
    <div>
      <Head title={title} />
      <Body info={info} />
      <button onClick={getApi}>Click</button>
    </div>
  );
};

export default React.memo(FirstLib);
