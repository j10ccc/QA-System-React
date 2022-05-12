import React from 'react';
import { CapsuleTabs } from 'antd-mobile';

export default function Indicator(props: any) {
  let { data, total, setCurPage, curPage } = props;
  return (
    <CapsuleTabs
      activeKey={`${curPage - 1}`}
      onChange={(index) => {
        setCurPage(Number(index) + 1);
      }}>
      {data.map((item: any, index: any) => {
        return <CapsuleTabs.Tab title={index + 1} key={index} />;
      })}
      <CapsuleTabs.Tab title="总览" key={`${total}`} />
    </CapsuleTabs>
  );
}
