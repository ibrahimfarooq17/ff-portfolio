import React from 'react';

const AwardContnet = [
  {
    img: 'a1',
    awardName: 'Azure Network Engineer - Associate AZ-700',
    awardFor: '11/2021',
  },
  {
    img: 'a2',
    awardName: 'HashiCorp Certified: Terraform Associate',
    awardFor: '10/2021',
  },
  {
    img: 'a3',
    awardName: 'Azure DevOps Engineer - AZ-400',
    awardFor: '6/2021',
  },
  {
    img: 'a3',
    awardName: 'Azure Administrator - AZ-103',
    awardFor: '8/2020',
  },
  {
    img: 'a3',
    awardName: 'Azure Fundamentals - AZ-900',
    awardFor: '8/2020',
  },
  {
    img: 'a3',
    awardName: 'CompTIA Network+',
    awardFor: '6/2019',
  },
];

const Awards = () => {
  return (
    <>
      <div className='row'>
        {AwardContnet.map((val, i) => (
          <div className='col-lg-4 m-15px-tb' key={i}>
            <div className='feature-box-02 d-flex align-items-center'>
              <div className='icon'>
                <img src={`img/award/${val.img}.png`} alt='award' />
              </div>
              <div className='media-body'>
                <h6>{val.awardName}</h6>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;
