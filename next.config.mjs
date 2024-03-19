/** @type {import('next').NextConfig} */
const nextConfig = {
    staticPageGenerationTimeout: 90, images: {
        domains: ['pic.rmb.bdstatic.com', 'example2.com'],
    },
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
};

export default nextConfig;
