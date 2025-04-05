/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg)$/,
            type: "asset/resource",
        });
        return config;
    },
    images: {
        remotePatterns: [{ hostname: "localhost" }],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;
