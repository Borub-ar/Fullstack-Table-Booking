import { createPortal } from 'react-dom';

const LoadingOverlay = () => {
  const overlayRoot = document.getElementById('overlay-root');

  if (!overlayRoot) return null;

  return createPortal(
    <div className='fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm'>
      <div className='flex flex-col items-center gap-4 text-white'>
        <div className='relative h-16 w-16'>
          <div className='absolute inset-0 rounded-full border-4 border-white/20'></div>
          <div className='absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-white'></div>
        </div>
        <p className='text-sm uppercase tracking-widest'>Loading</p>
      </div>
    </div>,
    overlayRoot,
  );
};

export default LoadingOverlay;
