/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
    GEMINI_API_KEY : process.env.GEMINI_API_KEY,
    GOOGLE_MAPS_API_KEY : process.env.GOOGLE_MAPS_API_KEY,
    },
  };
  
  export default nextConfig;
//   /** @type {import('next').NextConfig} */
// const nextConfig = {
//     typescript: {
//       ignoreBuildErrors: true,
//     },
//     eslint: {
//       ignoreDuringBuilds: true,
//     },
//   };
  
//   export default nextConfig;
  