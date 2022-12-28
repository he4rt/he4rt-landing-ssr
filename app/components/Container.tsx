import React from 'react';

type ContainerProps = React.PropsWithChildren<{}>;
export default function Container({ children }: ContainerProps) {
  return <div className='container mx-auto py-20 px-10'>{children}</div>;
}
