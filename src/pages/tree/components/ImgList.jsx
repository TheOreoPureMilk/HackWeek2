import React from 'react';
import emj_1 from '../img/emoji_1.png'
import emj_2 from '../img/emoji_2.png'
import emj_3 from '../img/emoji_3.png'
import emj_4 from '../img/emoji_4.png'
import emj_5 from '../img/emoji_5.png'
import emj_6 from '../img/emoji_6.png'
import emj_7 from '../img/emoji_7.png'
import { Tooltip } from 'antd';
import './ImgList.css'

const img_list = [
  {
    data: 'week1',
    url: emj_1,
    summary: '就很烦...',
    id: '001'
  },
  {
    data: 'week2',
    url: emj_2,
    summary: '就很烦...',
    id: '002'
  },
  {
    data: 'week3',
    url: emj_3,
    summary: '就很烦...',
    id: '003'
  },
  {
    data: 'week4',
    url: emj_4,
    summary: '就很烦...',
    id: '004'
  },
  {
    data: 'week5',
    url: emj_5,
    summary: '就很烦...',
    id: '005'
  },
  {
    data: 'week6',
    url: emj_6,
    summary: '就很烦...',
    id: '006'
  },
  {
    data: 'week7',
    url: emj_7,
    summary: '就很烦...',
    id: '007'
  },
]

function ImgList(props) {
  return (
    <div className='img-list'>
      {

        img_list.map((item) => {
          return (
            <div className='week-img-body' key={item.id}>
              <Tooltip placement="bottom"
                title={item.summary}
              >
                <img src={item.url} alt='' className='week-img' />
              </Tooltip>
            </div>
          )
        })

      }
    </div>
  )
}

export default ImgList