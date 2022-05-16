import { rgba } from "polished";
import styled, { css } from "styled-components";

import { TabsProps } from "./Tabs";

export const TabsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 20px;
`;

export const transition = css`
  transition: transform 0.45s;
`;

export const Underline = styled.div <Pick<TabsProps, "active">>`
  position: absolute;
  left: 0;
  bottom: 0%;
  width: 50%;
  height: 4px;
  background: #6a67ce;
  transform: translateX(${prop => (prop.active === 0 ? 0 : Number(prop.active) * 100)}%);
  ${transition}
`;

export const Button = styled.button <Pick<TabsProps, "active">>`
  flex: 1 1 50%;
  outline: none;
  height: 50px;
  cursor: pointer;
  background: none; 
  font-family: "Noto Sans", sans-serif;
  font-size: 14px;
  color: ${prop => rgba("black", prop.active ? 0.85 : 0.25)};
  border: unset;
`;

export const Content = styled.div <Pick<TabsProps, "active">>`
  position: absolute;
  height: auto;
  display: flex;
  transform: translateX(
    ${prop => (prop.active === 0 ? 0 : `-${Number(prop.active) * 500}px`)}
  );
  ${transition}
  padding: 10px;
  color: #000000;
`;

export const Tab = styled.div`
  width: 500px;
`;

export const Card = styled.div`
  overflow: hidden;
  position: relative;
  width: 500px;
  height: 100%;
`;

export const Link = styled.a`
  position: relative;
  font-family: "Noto Sans", sans-serif;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
  color: #3a2784;
  margin-left: 65px;
`;