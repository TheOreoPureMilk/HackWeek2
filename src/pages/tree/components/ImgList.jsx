import React from 'react';

const imgList = {
  width: ' 100%',
  height: ' 0.46rem',
  backgroundColor: '#B3DDD1',
  display: ' flex',
}

const weekImgBox = {
  width: '14.2 %',
  height: '100 %',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#FFFFFF',
}

const weekIMg = {
  maxWidth: '0.22rem',
  maxHeight: '0.22rem'
}

const imgList = [
  {

  },
  {

  },
  {

  },
  
]

function ImgList(props) {
  return (
    <div style={imgList}>
      {
        <div style={weekImgBox}>
          <img src="" alt="" styel={weekIMg} />
        </div>
      }
    </div>
  )
}

export default ImgList