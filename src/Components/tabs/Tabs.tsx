
import React from 'react';
import { Button, Row, Underline } from './styles-tabs';

export interface TabsProps {
  active: number | boolean;
  setActive: (state: number) => void;
}

const TABS = ["Login", "Registar"];

const Tabs = ({ active, setActive }: TabsProps) => {

  return (
    <Row>
      <Underline active={active} />
      {TABS.map((tab, index: number) => (
        <Button key={index} active={active === index} onClick={() => setActive(index)}>
          {tab}
        </Button>
      ))
      }
    </Row >
  );
};

export default Tabs;