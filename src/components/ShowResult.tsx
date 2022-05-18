import React from 'react';
import { Result, Space } from 'antd-mobile';

export default function ShowResult(props: any) {
  const { score, title, userInfo } = props;
  return (
    <Space
      direction="vertical"
      block
      justify="center"
      style={{ height: '100vh' }}>
      <Result
        status="success"
        title={'你的分数为：' + score + ' 分'}
        description={
          <>
            {title}
            <br />
            {userInfo.name} {userInfo.uid}
          </>
        }
        style={{ marginBottom: '20vh' }}
      />
    </Space>
  );
}
