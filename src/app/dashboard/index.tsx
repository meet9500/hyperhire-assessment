"use client";

import React from "react";
import styled from "styled-components";
import bgGradient from "@/assets/images/bg-gradient.png";
import Navbar from "@/components/navbar";
import Talent from "@/components/talent";
import Details from "@/components/Details";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-image: url(${bgGradient.src});
  background-size: cover;
`;

const Dashboard = () => {
  return (
    <Container>
      <Navbar />
      <Talent />
      <Details />
    </Container>
  );
};

export default Dashboard;
