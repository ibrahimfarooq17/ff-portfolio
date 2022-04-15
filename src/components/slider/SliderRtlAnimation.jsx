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

const SliderRtlAnimation = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id='home' className='home-banner'>
        <div className='hb-top-fixed d-flex'>
          <div className='hb-info'>
            <a href='tel:+04 6545-9535-6515'>{conctInfo.phone}</a>
            <a href='mailto:mail%20to:ibthemes21@gmail.com,com'>
              {conctInfo.email}
            </a>
          </div>
          <div className='hb-lang'>
            <ul className='nav'>
              <li className='active'>
                <a href='#'>EN</a>
              </li>
              <li>
                <a href='#'>FR</a>
              </li>
            </ul>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className='container'>
          <div className='row full-screen align-items-center'>
            <div className='col-lg-7'>
              <div className='type-box'>
                <h6 data-aos='fade-up' data-aos-duration='1200'>
                  Hello, My name is
                </h6>
                <h1
                  className='font-alt'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                  data-aos-delay='100'
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos='fade-up'
                  data-aos-duration='1200'
                  data-aos-delay='200'
                >
                  <TextLoop>
                    <p className='loop-text lead'>Technologist</p>
                    <p className='loop-text lead'> Software Engineer</p>
                    <p className='loop-text lead'> Cloud Engineer</p>
                  </TextLoop>
                </div>

                <p
                  className='desc'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                  data-aos-delay='300'
                >
                  {sliderContent.description}
                </p>
                <div
                  className='mt-4'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                  data-aos-delay='400'
                >
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

export default SliderRtlAnimation;
