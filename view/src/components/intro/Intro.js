import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Intro.css';


const Intro = () => {
    const fade = useSpring({ from: { opacity: 0, fontSize: '44px' }, config: { duration: 650 }, delay: 400, opacity: 1, fontSize: '32px' });
    const fade2 = useSpring({ from: { opacity: 0, fontSize: '44px' }, config: { duration: 650 }, delay: 650, opacity: 2, fontSize: '26px' });
    const fade3 = useSpring({ from: { opacity: 0, fontSize: '44px' }, config: { duration: 500 }, delay: 850, opacity: 1, fontSize: '32px' });

    return (
        <>
            <div className='introContainer container'>
                <animated.h2 id='helloDiv' style={fade}>Hello,</animated.h2>
                <animated.h4 id='introDiv' style={fade2}>my name is</animated.h4>
                <animated.h2 id='nameDiv' style={fade3}>Corbin</animated.h2>
            </div>
        </>
    )
}

export default Intro;