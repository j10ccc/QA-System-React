# 问卷表单系统

~~不只是问卷调查，还是在线考试~~

项目后端地址：[Patrick-Star-CN/QA-System-Server
](https://github.com/Patrick-Star-CN/QA-System-Server)

## Quick start

Before you launch this, you should add config file `config.ts` in `/src` that clarifies your backend service host.

```tsx
export const TestContext = {
  baseURL: 'http://localhost:8080',
  contestID: '4399', // 试卷ID
};
```

Then

```bash
yarn
yarn dev
```
