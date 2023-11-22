/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_LOCAL_URL: "mongodb://127.0.0.1:27017/book-it",
    DB_URL: "",
  },
};

module.exports = nextConfig;
