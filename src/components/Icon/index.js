import React from 'react';

const Icon = ({ id, className }) => {
  switch (id) {
    case 'chevron':
      return (
        <svg className={className} height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.586,5.586c-0.781,0.781-0.781,2.047,0,2.828L12.171,12l-3.585,3.586c-0.781,0.781-0.781,2.047,0,2.828  C8.976,18.805,9.488,19,10,19s1.024-0.195,1.414-0.586L17.829,12l-6.415-6.414C10.634,4.805,9.366,4.805,8.586,5.586z" />
        </svg>
      );
    case 'hamburger':
      return (
        <svg className={className} height="32px" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg">
          <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
