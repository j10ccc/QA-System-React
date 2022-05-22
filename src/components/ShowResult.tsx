import React from 'react';
import { Button, Result, Space } from 'antd-mobile';
import { FrownOutline } from 'antd-mobile-icons';

const PassingScore = 70;
const retry = true;
export default function ShowResult(props: any) {
  const { score, title, userInfo, check } = props;
  let isPassed = score < PassingScore ? false : true;

  if (check === 'SUCCESS')
    return (
      <Space
        direction="vertical"
        block
        justify="center"
        align="center"
        style={{ height: '100vh' }}>
        <Result
          icon={!isPassed ? <FrownOutline /> : undefined}
          status="success"
          title={'你的分数为：' + score + ' 分'}
          description={
            <>
              {!isPassed ? (
                <>
                  很遗憾，你未达到 {PassingScore} 分，无法获得学时
                  <br />
                </>
              ) : (
                <>
                  恭喜你通过了测试
                  <br />
                  学时将在一定时间内发放，请注意查收
                  <br />
                </>
              )}
              <br />
              {title}
              <br />
              {userInfo.name} {userInfo.uid}
            </>
          }
          style={{ marginBottom: '20vh' }}
        />
        {!isPassed && retry ? (
          <Button
            color="primary"
            onClick={() => {
              location.reload();
            }}>
            重新答题
          </Button>
        ) : null}
      </Space>
    );
  else {
    let resultTitle;
    if (check === 'ERROR') resultTitle = '系统异常';
    else if (check === 'REPEAT') resultTitle = '请勿重复提交';

    return (
      <Space
        direction="vertical"
        block
        justify="center"
        style={{ height: '100vh' }}>
        <Result
          status="error"
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
}
