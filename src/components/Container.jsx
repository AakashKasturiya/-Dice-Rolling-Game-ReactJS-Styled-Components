// Container.js
import React from "react";
import styled from "styled-components";

export const Container = ({ children }) => {
  return <ContainerPage>{children}</ContainerPage>;
};

const ContainerPage = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  width: 100%;
  padding: 16px; /* Optional: Add padding for responsiveness */

  @media (max-width: 768px) {
    max-width: inherit;
     width: inherit;
  }
`;
