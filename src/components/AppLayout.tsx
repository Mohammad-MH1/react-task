import { ReactNode } from 'react';

type AppLayoutProps = {
  children: ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <div className='h-dvh px-3 pt-5 vsm:pt-10 md:pt-12'>{children}</div>
    </>
  );
}

export default AppLayout;
