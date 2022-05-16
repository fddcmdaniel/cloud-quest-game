
import { useState } from 'react';
import Login from '../../Pages/Login';
import Signup from '../../Pages/Signup';
import { Card, Content, Tab, TabsWrapper } from './styles-tabs';
import Tabs from './Tabs';

const Container = () => {
  const [active, setActive] = useState(1);

  const TABS = [
    <Login setActive={setActive} />,
    <Signup setActive={setActive} />
  ];

  return (
    <TabsWrapper>
      <Card>
        <Tabs active={active} setActive={setActive} />
        <Content active={active}>
          {TABS.map((tab, index: number) => (
            <Tab key={index}>{tab}</Tab>
          ))}
        </Content>
      </Card>
    </TabsWrapper >
  );
};

export default Container;