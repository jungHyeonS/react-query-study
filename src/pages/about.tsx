import React, { useEffect } from 'react';
import { fetchUser } from '../servies';

function About() {
  const test = async () => {
    console.log('about');
    setTimeout(async () => {
      await fetchUser();
    }, 2000);
  };

  useEffect(() => {
    test();
  }, []);

  return <p>about</p>;
}
export default About;
