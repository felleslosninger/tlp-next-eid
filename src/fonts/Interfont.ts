import localFont from 'next/font/local';

export const InterFont = localFont({
  src: [
    {
      path: './static/Inter-Regular.ttf',
      weight: '400',
    },
    {
      path: './static/Inter-Medium.ttf',
      weight: '500',
    },
    {
      path: './static/Inter-SemiBold.ttf',
      weight: '600',
    },
  ],
});
