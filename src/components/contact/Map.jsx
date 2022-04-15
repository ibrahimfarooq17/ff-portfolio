import React from 'react';

const Map = () => {
  return (
    <>
      <div className='google-map'>
        <div className='embed-responsive embed-responsive-21by9'>
          <iframe
            className='embed-responsive-item'
            title='location title'
            src='https://maps.google.com/maps?q=Philadelphia&t=&z=11&ie=UTF8&iwloc=&output=embed'
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
