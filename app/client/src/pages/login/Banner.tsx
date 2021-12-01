import { Carousel } from 'antd'
import { CSSProperties } from 'react';
import styles from './index.module.less'

const contentStyle: CSSProperties = {
  height: '100vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  margin: 0,
};

export default () => {
  return (
    <Carousel dotPosition="bottom">
      <div>
          <h3 style={contentStyle}>1</h3>
        </div>
      <div>
          <h3 style={contentStyle}>1</h3>
        </div>
      <div>
          <h3 style={contentStyle}>1</h3>
        </div>
      <div>
          <h3 style={contentStyle}>1</h3>
        </div>
      <div>
          <h3 style={contentStyle}>1</h3>
        </div>
    </Carousel>
  )
}
