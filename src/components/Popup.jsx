import React, { useState } from 'react';

function Popup() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className='fixed left-1/2 transform -translate-x-1/2'>
          <div className='border border-solid flex items-center' style={{
            borderRadius: "8px",
            height: "56px",
            width: "300px",
          }}>
            <div className='flex flex-row items-center'>
              <img src="./popup.png" alt="icon" className='mr-3 ml-2' style={{ width: "20px", height: "20px" }} />
              <p style={{ fontFamily: "Roboto", fontWeight: "600", fontSize: "16px", lineHeight: "22px" }}>Batch Successfully Added</p>
              <img src="./x.png" alt="icon" className='ml-6 cursor-pointer' style={{ height: "24px", width: "24px" }} onClick={handleClose} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
