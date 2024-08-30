/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/:path*',
                has: [{ type: 'header', key: 'host', value: 'www.drewtjohnson.com' }],
                destination: 'https://drewtjohnson.com/:path*',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
