import localFont from 'next/font/local';

export const InterFont = localFont({
  src: [
    {
      path: './static/Inter-Medium.ttf',
    },
    {
      path: './static/Inter-SemiBold.ttf',
    },
    {
      path: './static/Inter-Regular.ttf',
    },
  ],
});
