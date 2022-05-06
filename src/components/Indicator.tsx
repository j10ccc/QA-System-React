import { CapsuleTabs } from "antd-mobile";
import { useContext } from "react";
import { DataContext } from "../App";

export default function Indicator(props: any) {
  let { setCurPage, curPage } = props;
  const data = useContext(DataContext);
  const len = data.data?.length || 0;
  return (
    <CapsuleTabs
      activeKey={`${curPage - 1}`}
      onChange={(index) => {
        setCurPage(Number(index) + 1)
        console.log('clicked indic', index); // from 0
      }}>
      {data.data?.map((item, index) => {
        return <CapsuleTabs.Tab
          title={index + 1}
          key={index}
        />
      }
      )}
      <CapsuleTabs.Tab title='总览' key={`${len}`} />
    </CapsuleTabs >
  )
}