import { ReactNode } from 'react';

type AppLayoutProps = {
  children: ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <div className='h-dvh px-3 py-5 md:py-12'>{children}</div>
    </>
  );
}

export default AppLayout;
