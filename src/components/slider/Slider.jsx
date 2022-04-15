import React from 'react';
import TextLoop from 'react-text-loop';

const conctInfo = {
  phone: '+04 6545-9535-6515',
  email: ' nairobi-designer@domain.com',
};

const sliderContent = {
  name: 'Fifunmi Familusi',
  description: `I am a passionate and experienced technologist looking to network, knowledgeshare and drive solutions for enterprise and small businesses.`,
  btnText: ' Download CV',
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id='home' className='home-banner'>
        <div className='container'>
          <div className='row full-screen align-items-center'>
            <div className='col-lg-7'>
              <div className='type-box'>
                <h6>Hello, My name is</h6>
                <h1 className='font-alt'>{sliderContent.name}</h1>
                <TextLoop>
                  <p className='loop-text lead'>Technologist</p>
                  <p className='loop-text lead'> Software Engineer</p>
                  <p className='loop-text lead'> Cloud Engineer</p>
                </TextLoop>{' '}
                <p className='desc'>{sliderContent.description}</p>
                <div className='mt-4'>
                  <a
                    className='px-btn px-btn-white'
                    href='img/resume.pdf'
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className='hb-me'
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + 'img/slider/main-image.jpg'
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
