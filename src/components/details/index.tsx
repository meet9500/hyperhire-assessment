import styled from "styled-components";

const Talent = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    width: 70%;
    padding-bottom: 100px;
    background-color: red;
    height: 400px;
    @media screen and (max-width: 1024px) {
      width: 85%;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      padding-top: 96px;
    }
  `;

  return (
    <>
      <Container></Container>
    </>
  );
};

export default Talent;
