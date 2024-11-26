import React from 'react';
import styled from 'styled-components';
import Logo from '@/assets/images/logo.png';
import DownArrow from '@/assets/images/caret-down.png';
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  padding: 18px;
  height: fit-content;

  @media screen and (max-width: 1024px) {
    width: 85%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  @media screen and (max-width: 1024px) {
    gap: 30px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Label = styled.div`
  font-weight: 900;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

const Button = styled.div`
  padding: 6px 24px;
  font-weight: 900;
  font-size: 16px;
  line-height: 24px;
  color: #4a77ff;
  background-color: #ffffff;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Image src={Logo} alt="Logo" />
      <Info>
        <Options>
          <Label className="text-balance">채용</Label>
          <Image src={DownArrow} alt="DownArrow" />
        </Options>
        <Label className="text-balance">해외 개발자 활용 서비스</Label>
      </Info>
      <Button>문의하기</Button>
    </Container>
  );
};

export default Navbar;
