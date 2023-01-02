import { useRef, useState } from 'react';

export default function ProgressBar({ progress }) {
  // custom

  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();

  function toggleTooltip() {
    if (tooltip) {
      setTooltip(false);
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = 'block';
    }
  }

  return (
    <div
      style={{
        width: 'calc(100vw - 100px)',
        height: '65px',
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: '20px',
        margin: '0 auto',
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '8px',
        display: 'grid',
        justifyContent: 'space-between',
        alignItems: 'center',
        gridTemplateColumns: '50px 1fr auto',
        gap: '20px;',
      }}
    >
      <div style={{ width: '180vh', position: 'relative', margin: ' 0 auto' }}>
        {/* <div
          style={{
            position: 'absolute',
            top: '-70px',
            width: '130px',
            backgroundColor: 'blue',
            color: 'black',
            padding: '0.8rem 1rem',
            borderRadius: '7px',
            fontSize: '12px',
            fontWeight: '600',
            display: 'none',
          }}
          ref={tooltipRef}
        >
          {progress}% Complete! ppp
        </div> */}
        <div
          style={{
            width: '100%',
            height: '4px',
            margin: ' 0 auto',
            background: '#e4e8ee',
            border: 'none',
            outline: 'none',
            borderRadius: '20px',
          }}
        >
          <div
            style={{
              height: '4px',
              background: ' blue',
              borderRadius: '20px',
              position: 'relative',
              transition: ' width 0.3s ease',
              width: `${progress}%`,
            }}
            onMouseOver={toggleTooltip}
            onMouseOut={toggleTooltip}
          ></div>
        </div>
      </div>
      <button></button>
    </div>
  );
}
