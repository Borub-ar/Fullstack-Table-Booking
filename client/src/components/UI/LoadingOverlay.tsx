import { createPortal } from 'react-dom';

const LoadingOverlay = () => {
  const overlayRoot = document.getElementById('overlay-root');

  if (!overlayRoot) return null;

  return createPortal(
    <div className='absolute inset-0 z-40 flex items-center justify-center bg-black/50'>
      <p>Loading</p>
    </div>,
    overlayRoot,
  );
};

export default LoadingOverlay;
