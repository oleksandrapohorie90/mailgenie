//WAS THIS
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const getServerUrl = (): string => {
  const defaultPort = 3000;
  const currentPort = process.env.PORT || defaultPort;
  return `http://localhost:${currentPort}`;
};

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_APP_URL: getServerUrl(),
  },
};

export default nextConfig;



