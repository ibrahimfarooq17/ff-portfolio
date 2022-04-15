import React from 'react';

const ServiceContent = [
  {
    icon: 'icon-cloud',
    title: 'Cloud Engineering',
    descriptions: `Cloud Engineer Specializing in Systems Engineering design, configuration,
    and implementation of cloud services. Good knowledge of the most popular cloud computing tools.`,
    delayAnimation: '',
  },
  {
    icon: 'icon-mobile',
    title: 'Software Engineering',
    descriptions: `Experienced software engineer with a passion for developing innovative
    programs that expedite the efficiency and effectiveness of organizational success.`,
    delayAnimation: '200',
  },
  {
    icon: 'icon-desktop',
    title: 'Web Design & Development',
    descriptions: `Solution-driven web developer adept at contributing to highly collaborative
    environment and finding solutions. Proven experience developing consumer-focused websites.`,
    delayAnimation: '400',
  },
];
export default function Service() {
  return (
    <>
      <div className='row'>
        {ServiceContent.map((val, i) => (
          <div className='col-md-6 col-lg-4 my-3' key={i}>
            <div className='feature-box-01'>
              <div className='icon'>
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className='feature-content'>
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
