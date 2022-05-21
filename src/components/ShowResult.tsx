import React from 'react';
import { Result, Space } from 'antd-mobile';

export default function ShowResult(props: any) {
  const { score, title, userInfo, check } = props;
  let resultTitle;
  if (check === 'SUCCESS') resultTitle = '你的分数为：' + score + ' 分';
  else if (check === 'ERROR') resultTitle = '系统异常';
  else if (check === 'REPEAT') resultTitle = '请勿重复提交';

  return (
    <Space
      direction="vertical"
      block
      justify="center"
      style={{ height: '100vh' }}>
      <Result
        status={check === 'SUCCESS' ? 'success' : 'error'}
        title={resultTitle}
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
