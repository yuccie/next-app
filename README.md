This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 总结

- next提供了组件，可以直接使用
- pages其实就是根目录，文件路径就是路由地址

### 问题列表

- antd组件的使用方法，参考文档，

- 拿到的文件，如何上传到服务器？
    - 全栈项目，本身就是服务器，只需要将文件发送到某个api里
    - 发送文件，需要什么格式？content-type: 

- next框架使用的服务端渲染技术，所以浏览器看不到接口请求记录
    - 那如何改为客户端发起请求呢？

- 拿到对应的文件，如何写入到数据库？
    - 本地开发时，如果用数据库，需要本机安装mongodb，并连接
    - 线上部署时，则需要使用vercel提供的数据库服务
    - 线上和线下环境，则需要环境变量。

- vercel会在代码推送后，自动部署。。。牛