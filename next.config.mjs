/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => [
        {
            source: '/:path*',
            has: [{ type: 'host', value: 'www.yourdomain.com' }],
            destination: 'https://yourdomain.com/:path*',
            permanent: true
        }
    ]
};

export default nextConfig;
