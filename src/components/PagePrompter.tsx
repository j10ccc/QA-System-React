import React from 'react';
import { NavBar, Space } from 'antd-mobile';
import { RightOutline } from 'antd-mobile-icons';
import { Affix } from 'antd';

function GoNext(props: any) {
  const { curPage, setCurPage, total } = props;
  return (
    <a
      onClick={() => {
        setCurPage(curPage + 1);
      }}>
      <Space align="center">
        <span style={{ fontSize: '15px' }}>
          {curPage != total ? '下一题' : '总览'}
        </span>
        <RightOutline style={{ fontSize: 24 }} />
      </Space>
    </a>
  );
}

export default function PagePrompter(props: any) {
  const { total, curPage, setCurPage } = props;

  if (curPage != total + 1)
    return (
      <Affix offsetBottom={0}>
        <NavBar
          back={curPage == 1 ? null : '上一题'}
          onBack={() => {
            setCurPage(curPage - 1);
          }}
          right={
            <GoNext curPage={curPage} setCurPage={setCurPage} total={total} />
          }
          style={{ backgroundColor: 'white' }}>
          <div>
            第 {curPage} / {total} 题
          </div>
        </NavBar>
      </Affix>
    );
  else return null;
}
