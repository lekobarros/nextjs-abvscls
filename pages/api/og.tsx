import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

const fontMedium = fetch(new URL('src/fonts/PPNeueMontreal-Medium.otf', import.meta.url)).then((res) => res.arrayBuffer())
const fontBold = fetch(new URL('src/fonts/PPNeueMontreal-Bold.otf', import.meta.url)).then((res) => res.arrayBuffer())

export default async function handler() {
  const fontMediumData = await fontMedium;
  const fontBoldData = await fontBold;

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(109.11deg, rgba(224, 202, 164, 0.2) 0%, rgba(154, 161, 166, 0.2) 25.52%, rgba(101, 83, 67, 0.2) 49.48%, rgba(224, 202, 164, 0.2) 76.56%, rgba(154, 161, 166, 0.2) 100%)",
          backgroundColor: '#F5F4F9',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
        }}
      >
        <h1 style={{
          fontFamily: '"PPNeueMontrealBold"',
          fontSize: '128px',
          lineHeight: 1
        }}>abvscls</h1>
        <p style={{
          fontFamily: '"PPNeueMontrealMedium"',
          fontSize: '36px',
          lineHeight: '40px'
        }}>Alex Vasconcelos</p>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: 'PPNeueMontrealMedium',
          data: fontMediumData,
          style: 'normal',
        },
        {
          name: 'PPNeueMontrealBold',
          data: fontBoldData,
          style: 'normal',
        },
      ],
    },
  );
}
