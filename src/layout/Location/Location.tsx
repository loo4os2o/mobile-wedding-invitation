import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo } = data;
  const tel = '010-5395-7376';
  const tel2 = '042-620-6526';

  const makeCall = () => {
    window.location.href = `tel:${tel}`;
  };
  const makeCal2 = () => {
    window.location.href = `tel:${tel2}`;
  };

  return (
    <LocationWrapper>
      <PointTitle className='pt-20' style={{fontSize: "18px"}}>{mapInfo.address1}</PointTitle>
      <Caption textAlign={'center'} style={{lineHeight: "200%", marginBottom: "30px"}}>
        {mapInfo.address2}
        <div className='phone'>
          <div onClick={makeCall} style={{ cursor: 'pointer'}}>042-620-6524 📞</div>
          <input type='tel' value={tel2} style={{display: "none"}} readOnly />
        </div>
        <div className='phone'>
          <div onClick={makeCal2} style={{ cursor: 'pointer' }}>042-620-6526 📞</div>
          <input type='tel' value={tel} style={{display: "none"}} readOnly />
        </div>
      </Caption>
      <Map />
      <MapButtons />
      <Address />
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
