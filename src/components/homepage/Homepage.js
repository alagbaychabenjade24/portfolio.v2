import React from 'react';

import './Homepage.scss';

function Homepage() {
    return (
        <section className='homepage'>
            <div className='homepage__greetings'>
                <h1>Mayng Adlaw! 👋</h1>
            </div>

            <div className='homepage__content'>
                <h2>
                    I'm <span>Chaben Jade Alagbay</span> a curious front-end
                    software engineer focused on building beautiful and
                    optimized apps while staying up-to-date with the latest
                    trends in tech.
                </h2>
            </div>

            <div className='homepage--getInTouch'>
                <p>
                    Get in touch 👉{' '}
                    <a
                        href='mailto:alagbaychabenjade24@gmail.com'
                        target='_blank'
                        rel='noreferrer'
                    >
                        hello@chabenalagbay.dev
                    </a>
                </p>
            </div>
        </section>
    );
}

export default Homepage;