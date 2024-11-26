import { Divider, Tooltip } from "antd";
import React from "react";
import styled from "styled-components";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import icon1 from "@/assets/images/icon-1.png";
import icon2 from "@/assets/images/icon-2.png";
import icon3 from "@/assets/images/icon-3.png";
import icon4 from "@/assets/images/icon-4.png";
import icon5 from "@/assets/images/icon-5.png";
import checkboxIcon from "@/assets/images/Checkbox.png";
import Image from "next/image";
import "swiper/css";
import { useMediaQuery } from "react-responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 70%;
  padding-top: 120px;
  padding-bottom: 100px;

  @media screen and (max-width: 1024px) {
    width: 85%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 96px;
  }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  gap: 14px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 16px;
  }
`;

const LeftContent = styled.div`
  width: 50%;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const CustomTooltip = styled(Tooltip)``;

const Title = styled.div`
  font-size: 48px;
  font-weight: 900;
  padding-bottom: 16px;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

const Text = styled.div`
  font-size: 24px;
  font-weight: 900;
  padding-bottom: 24px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    padding-bottom: 0;
  }
`;

const Label = styled.div`
  font-size: 18px;
  font-weight: 900;
`;

const Footer = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
  gap: 48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 160px;

  .ant-divider-horizontal {
    margin: 0 !important;
    border-color: #ffffff !important;
  }
`;

const Info = styled.div`
  font-size: 16px;
  font-weight: 900;
`;

const RightContent = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Card = styled.div`
  width: 100%;
  border: 1px solid #000000;
  border-radius: 8px;
  height: 100%;

  @media screen and (max-width: 768px) {
    height: 378px;
  }
`;

const SwiperContainer = styled(Swiper)`
  .swiper-wrapper {
    width: 100%;
    display: flex;
    gap: 10px;
  }
`;

const ItemCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2);
  padding: 16px;
  display: flex;
  gap: 24px;
  align-items: center;
`;

const ItemLabel = styled.div`
  font-size: 24px;
  font-weight: 900;
  color: #ffffff;
`;

const MobileFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;

  .row {
    display: flex;
    gap: 8px;
  }
`;

const CheckBoxItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  .chk-text {
    font-size: 16px;
    font-weight: 900;
    color: #ffffff;
  }
`;

const dummyFooterData = [
  {
    label: "평균 월 120만원",
    info: "임금을 эт국가를 기준으로 계산합니다.",
  },
  {
    label: "최대 3회 인력교체",
    info: "막상 채용해보니 맞지 않아도 걱정하지 마세요.",
  },
  {
    label: "평균 3일, 최대 10일",
    info: "급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.",
  },
];

const items = [
  {
    icon: icon1,
    text: "해외 마케팅",
  },
  {
    icon: icon2,
    text: "퍼블리셔",
  },
  {
    icon: icon3,
    text: "캐드원(제도사)",
  },
  {
    icon: icon4,
    text: "해외 세일즈",
  },
  {
    icon: icon5,
    text: "해외 CS",
  },
];

const Talent = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <Container>
      <Content>
        <LeftContent>
          <CustomTooltip
            placement="topLeft"
            title="풀타임, 파트타임"
            trigger={"hover"}
            color="#ffffff"
          >
            <Title>
              최고의 실력을 가진 <br /> 외국인 인재를 찾고 계신가요?
            </Title>
          </CustomTooltip>

          <Text>
            법률 및 인사관리 부담없이
            {isMobile ? (
              "1주일 이내에 원격으로 채용해보세요."
            ) : (
              <>
                1주일 이내에 원격으로 채용해보세요.
                <br />
              </>
            )}
          </Text>
          <Label>개발자가 필요하신가요?</Label>
          <Footer>
            {dummyFooterData?.map((i) => (
              <FooterContent>
                <Divider />
                <Label>{i?.label}</Label>
                <Info>{i?.info}</Info>
              </FooterContent>
            ))}
          </Footer>
        </LeftContent>
        <RightContent>
          <Card></Card>
        </RightContent>
      </Content>
      <div>
        {!isMobile ? (
          <SwiperContainer
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={4}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              824: {
                slidesPerView: 2,
              },
            }}
          >
            {items?.map((i, ind) => (
              <SwiperSlide key={ind}>
                <ItemCard>
                  <Image src={i?.icon} alt="icon" />
                  <ItemLabel>{i?.text}</ItemLabel>
                </ItemCard>
              </SwiperSlide>
            ))}
          </SwiperContainer>
        ) : (
          <MobileFooter>
            <div className="row">
              <CheckBoxItem>
                <Image src={checkboxIcon} alt="checkboxIcon" />
                <span className="chk-text">한국어 능력</span>
              </CheckBoxItem>

              <CheckBoxItem>
                <Image src={checkboxIcon} alt="checkboxIcon" />
                <span className="chk-text">한국어 능력</span>
              </CheckBoxItem>
            </div>
            <div className="row">
              <CheckBoxItem>
                <Image src={checkboxIcon} alt="checkboxIcon" />
                <span className="chk-text">한국어 능력</span>
              </CheckBoxItem>

              <CheckBoxItem>
                <Image src={checkboxIcon} alt="checkboxIcon" />
                <span className="chk-text">한국어 능력</span>
              </CheckBoxItem>
            </div>
          </MobileFooter>
        )}
      </div>
    </Container>
  );
};

export default Talent;
