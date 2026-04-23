'use client';

import type { ReactNode } from 'react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Example if react-query is used
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // Example

// const queryClient = new QueryClient(); // Example

export function Providers({ children }: { children: ReactNode }) {
  // Example usage with react-query:
  // return (
  //   <QueryClientProvider client={queryClient}>
  //     {children}
  //     <ReactQueryDevtools initialIsOpen={false} />
  //   </QueryClientProvider>
  // );
  return <>{children}</>;
}
