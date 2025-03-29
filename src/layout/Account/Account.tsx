import styled from '@emotion/styled';
import data from 'data.json';
import AccountWrap from './AccountWrap.tsx';
import Accordion from '@/components/Accordion.tsx';
import "@/components/opening.css";

const Account = () => {
  const { hostInfo } = data;
  return (
    <HostInfoWrapper>

      <div className='acc-comment'>
        멀리서도 축하의 마음을 전하고 싶으신<br/>
        분들을 위해 계좌번호를 안내드립니다.
      </div>
      <div className='acc-comment'>
        소중한 축하를 보내주셔서 감사드리며,<br/>
        따듯한 마음에 깊이 감사드립니다.
      </div>

      {hostInfo.map((host) => {
        return (
          <Accordion title={host.host} key={host.host}>
            {host.accountInfo.map((account) => {
              return (
                <AccountWrap
                  key={account.name}
                  name={account.name}
                  relation={account.relation}
                  bank={account.bank}
                  account={account.account}
                  kakaopayAccount={account.kakaopayAccount}
                  tossAccount={account.tossAccount}
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  phone={account.phone}
                />
              );
            })}
          </Accordion>
        );
      })}
    </HostInfoWrapper>
  );
};

export default Account;

const HostInfoWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: 20px;
`;
