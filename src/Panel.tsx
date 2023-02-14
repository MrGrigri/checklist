import React from 'react';
import { AddonPanel } from '@storybook/components';
import { IconName, PanelContent } from './components/PanelContent';

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  const items = [
    {
      id: 1,
      icon: IconName.CHECK,
      summary: 'Summary Text',
      description: 'Description Text',
    },
  ];

  return (
    <AddonPanel {...props}>
      <PanelContent items={items}></PanelContent>
    </AddonPanel>
  );
};
