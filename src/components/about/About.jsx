import React from 'react';
import Social from '../Social';
import Testimonials from '../../components/testimonial/Testimonial';
import Services from '../../components/service/Service';
import Awards from '../../components/award/Awards';

const About = () => {
  return (
    <>
      <section id='about' className='section theme-light dark-bg'>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-md-6 col-lg-4'>
              <div className='about-me'>
                <div className='img'>
                  <div className='img-in'>
                    <img src='img/about/head-image.jpg' alt='about' />
                  </div>
                  {/* <Social /> */}
                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className='info'>
                  <p>Software Engineer</p>
                  <h3>Fifunmi Familusi</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div className='col-lg-7 ml-auto'>
              <div className='about-info'>
                <div className='title'>
                  <h3>Biography</h3>
                </div>
                <div className='about-text'>
                  <p>
                    I am a passionate and experienced technologist looking to
                    network, knowledgeshare and drive solutions for enterprise
                    and small businesses.
                  </p>
                  {/* <p>
                    I'm a Freelancer Front-end Developer with over 3 years of
                    experience. I'm from San Francisco. I code and create web
                    elements for amazing people around the world. I like work
                    with new people. New people new Experiences.
                  </p> */}
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}
          <div
            className='separated'
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + 'img/border-dark.png'
              })`,
            }}
          ></div>
          {/* End separated */}
          <div className='title'>
            <h3>What I do?</h3>
          </div>
          <Services />
          {/* End .row */}

          {/* separated */}
          <div
            className='separated'
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + 'img/border-dark.png'
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className='title'>
            <h3>Awards.</h3>
          </div>
          <Awards />
          {/* End Awards */}

          {/* separated */}
          {/* <div
            className='separated'
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + 'img/border-dark.png'
              })`,
            }}
          ></div> */}
          {/* End separated */}

          {/* <div className='title'>
            <h3>Testimonials.</h3>
          </div> */}
          {/* <Testimonials /> */}
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;
