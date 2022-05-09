import { CapsuleTabs } from 'antd-mobile';
import { useContext } from 'react';
import { DataContext } from '../App';

export default function Indicator(props: any) {
  let { total, setCurPage, curPage } = props;
  const data = useContext(DataContext);
  return (
    <CapsuleTabs
      activeKey={`${curPage - 1}`}
      onChange={(index) => {
        setCurPage(Number(index) + 1);
      }}
    >
      {data.map((item, index) => {
        return <CapsuleTabs.Tab title={index + 1} key={index} />;
      })}
      <CapsuleTabs.Tab title='总览' key={`${total}`} />
    </CapsuleTabs>
  );
}
