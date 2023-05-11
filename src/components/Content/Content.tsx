import React from 'react';
import Link from 'next/link';

import { useAppSelector } from '../../store/hooks';

const Content = () => {
  const activePage = useAppSelector((state) => state.activePage);

  const createMarkup = () => {
    const regex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/g;
    const ingressWithReplacedLinks = activePage.content.node.ingress.replace(
      regex,
      (match, link: string) => {
        if (link.includes('localhost')) {
          return match.replace('<a', '<Link to="/"').replace('</a>', '</Link>');
        }
        return match;
      },
    );
    return { __html: ingressWithReplacedLinks };
  };

  return <div dangerouslySetInnerHTML={createMarkup()} />;
};

export { Content };
