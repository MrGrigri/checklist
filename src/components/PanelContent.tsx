import React from 'react';
import { PANEL_ID } from '../constants';

interface PanelContentProps {
  items: Array<{
    id: number;
    icon: IconName;
    summary: string;
    description: string;
  }>;
}

const SvgSprite: React.FC = () => (
  <svg version="1.1" display="none" aria-hidden="true" width="0" height="0">
    <defs>
      <symbol id={PANEL_ID + '__decagram'} viewBox="0 0 24 24">
        <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12Z" />
      </symbol>
      <symbol id={PANEL_ID + '__check-decagram'} viewBox="0 0 24 24">
        <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
      </symbol>
      <symbol id={PANEL_ID + '__alert-decagram'} viewBox="0 0 24 24">
        <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M13,17H11V15H13V17M13,13H11V7H13V13Z" />
      </symbol>
    </defs>
  </svg>
);

const SvgIcon: React.FC<{ icon: string; style: React.CSSProperties }> = ({
  icon,
}) => (
  <svg width="24" height="24">
    <use href={'#' + PANEL_ID + icon}></use>
  </svg>
);

export enum IconName {
  BLANK = 'BLANK',
  CHECK = 'CHECK',
  ALERT = 'ALERT',
}

export const PanelContent: React.FC<PanelContentProps> = ({ items }) => {
  enum InternalIconName {
    BLANK = '__decagram',
    CHECK = '__check-decagram',
    ALERT = '__alert-decagram',
  }

  const orderedListStyles: React.CSSProperties = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  };
  const orderedListItemStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '24px auto',
    gridTemplateAreas: "'a b' 'a c'",
    gridGap: '4px 8px',
  };
  const iconStyles: React.CSSProperties = {
    gridArea: 'a',
  };
  const summaryStyles: React.CSSProperties = {
    gridArea: 'b',
    alignSelf: 'center',
  };
  const DescriptionStyles: React.CSSProperties = {
    gridArea: 'c',
  };

  return (
    <div>
      <SvgSprite />

      <ul style={orderedListStyles}>
        {items.map((item) => (
          <li key={item.id} style={orderedListItemStyles}>
            <SvgIcon icon={InternalIconName[item.icon]} style={iconStyles} />
            <span style={summaryStyles}>{item.summary}</span>
            <span style={DescriptionStyles}>{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
