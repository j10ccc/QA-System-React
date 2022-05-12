import React from 'react';
import { Result } from 'antd-mobile';

export default function ShowResult(props: any) {
  return (
    <Result status='success' title={'你的分数为：' + props.score + ' 分'} />
  );
}
