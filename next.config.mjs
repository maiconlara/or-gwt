/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: "ifestei.belogic.com.br" }],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;
