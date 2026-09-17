import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Chikami — Tattoo Artist & Illustrator | Osaka, Japan';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0C0C0D',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #22395C 0%, transparent 50%), radial-gradient(circle at 75% 75%, #B23A1E 0%, transparent 50%)',
        }}
      >
        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              color: '#EFE8D8',
              marginBottom: 32,
              letterSpacing: '-0.02em',
              textAlign: 'center',
            }}
          >
            CHIKAMI
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 36,
              color: '#00E5C7',
              marginBottom: 48,
              textAlign: 'center',
              maxWidth: 900,
            }}
          >
            Tattoo Artist & Illustrator
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 28,
              color: 'rgba(239, 232, 216, 0.7)',
              textAlign: 'center',
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            Traditional Japanese irezumi meets digital character design
          </div>

          {/* Location */}
          <div
            style={{
              fontSize: 24,
              color: '#B8925A',
              marginTop: 48,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            📍 Osaka, Japan
          </div>
        </div>

        {/* Accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: 'linear-gradient(90deg, #B23A1E 0%, #22395C 50%, #00E5C7 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
