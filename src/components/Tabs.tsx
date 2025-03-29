import { useState } from 'react';
import '@/components/opening.css';
import BanquetHall from "@/assets/images/banquetHall.jpg";
import Parking from "@/assets/images/parking.jpg";
import WelcomeFood from "@/assets/images/welcomeFood.jpg";
// import styled from '@emotion/styled';

// eslint-disable-next-line react/prop-types
const Tab: React.FC<{ label: string; isActive: boolean; onClick: () => void }> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='tab-btn'
      style={{
        backgroundColor: isActive ? '#37474F' : '#e6ece1',
        color: isActive ? '#fff' : '#44484d',
      }}
    >
      {label}
    </button>
  );
};

// eslint-disable-next-line react/prop-types
const TabContent: React.FC<{ activeTab: number }> = ({ activeTab }) => {
  switch (activeTab) {
    case 0:
      return (
        <div className='tab-cont-wrap'>
          <div className='img-wrap'>
            <img src={Parking} alt="주차장 이미지" />
          </div>
          <div className='tab-cont'>
            <div className='title'>주차안내</div>
            선샤인호텔 주차타워 또는 식장 뒷편 옥외 주차장에 주차가능합니다.<br/>
            주차는 안내요원의 안내에 따라 주차하시면 됩니다.<br/>
            예식당일 주차타워 및 옥외주차장에 주차할 시 주차 등록 없이 출차 가능합니다.<br/>
            만일 내부 주자창이 만차일 경우 맞은편 이마트로 주차 안내될 예정이며,<br/>
            이마트 주차 시 안내요원에게 주차권을 받으셔야 합니다.<br/>
          </div>
        </div>
      )
    case 1:
      return (
        <div className='tab-cont-wrap'>
          <div className='img-wrap'>
            <img src={WelcomeFood} alt="웰컴푸드 이미지" />
          </div>
          <div className='tab-cont'>
            <div className='title'>웰컴푸드 안내</div>
            귀한 발걸음을 해주신 하객분들을 위해서 엘리베이터 옆쪽에 다과와 커피를 준비해 놨습니다.<br/>
            가든 파티에 오신 것처럼 맛있게 드시면서 저희의 결혼식을 즐겨주세요.
          </div>
        </div>
      )
    case 2:
      return (
        <div className='tab-cont-wrap'>
          <div className='img-wrap'>
            <img src={BanquetHall} alt="연회장 이미지" />
          </div>
          <div className='tab-cont'>
            <div className='title'>연회장 안내</div>
            연회장은 뷔페로 진행되며, 단독 연회장으로 층수는 식권에 안내 될 예정입니다.
          </div>
        </div>
      )
    default:
      return null;
  }
};

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='tab-wrap'>
      <div className='tab-btn-group'>
        <Tab label="주차장" isActive={activeTab === 0} onClick={() => setActiveTab(0)} />
        <Tab label="웰컴푸드" isActive={activeTab === 1} onClick={() => setActiveTab(1)} />
        <Tab label="연회장" isActive={activeTab === 2} onClick={() => setActiveTab(2)} />
      </div>
      <TabContent activeTab={activeTab} />
    </div>
  );
};

export default Tabs;