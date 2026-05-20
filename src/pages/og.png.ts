import type { APIRoute } from 'astro';
import satori from 'satori';
import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join } from 'path';
import { portfolio as p } from '../data/portfolio';

const font300 = readFileSync(
  join(process.cwd(), 'node_modules/@fontsource/geist/files/geist-latin-300-normal.woff')
);
const font400 = readFileSync(
  join(process.cwd(), 'node_modules/@fontsource/geist/files/geist-latin-400-normal.woff')
);

const box = (style: Record<string, unknown>, children?: unknown) => ({
  type: 'div',
  props: { style, children },
});

export const GET: APIRoute = async () => {
  const markup = box(
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '#f3efe6',
      fontFamily: 'Geist',
      position: 'relative',
    },
    [
      box(
        {
          fontSize: '84px',
          fontWeight: 300,
          letterSpacing: '-0.04em',
          color: '#1a1a1a',
          lineHeight: 1,
        },
        p.name
      ),
      box({ height: '22px' }),
      box(
        {
          fontSize: '22px',
          fontWeight: 400,
          letterSpacing: '-0.01em',
          color: '#5a564f',
        },
        p.title
      ),
      box({ height: '12px' }),
      box(
        {
          fontSize: '13px',
          fontWeight: 400,
          letterSpacing: '0.14em',
          color: '#6f6860',
        },
        p.location.toUpperCase()
      ),
      box(
        {
          position: 'absolute',
          bottom: '64px',
          right: '72px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '12px',
        },
        [
          box(
            {
              fontSize: '13px',
              fontWeight: 400,
              letterSpacing: '0.04em',
              color: '#6f6860',
            },
            'acastelo.dev'
          ),
          box({
            width: '40px',
            height: '1px',
            backgroundColor: '#6f6860',
            opacity: 0.4,
          }),
        ]
      ),
    ]
  );

  const svg = await satori(markup as Parameters<typeof satori>[0], {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Geist', data: font300, weight: 300, style: 'normal' },
      { name: 'Geist', data: font400, weight: 400, style: 'normal' },
    ],
  });

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
};
