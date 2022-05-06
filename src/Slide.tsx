import { List, Swiper } from "antd-mobile";
import { SwiperRef } from "antd-mobile/es/components/swiper";
import { useContext, useEffect, useRef } from "react";
import { DataContext } from "./App";
import EachQuestion from './components/EachQuection'
import Preview from "./components/Preview";

export default function Slide(props: any) {
  const data = useContext(DataContext);
  const swiper = useRef<SwiperRef>(null);
  const { curPage, setCurPage } = props;


  useEffect(() => {
    swiper.current?.swipeTo(curPage - 1);
    console.log('curPage', curPage);
  }, [curPage])

  return (
    <Swiper loop={false}
      indicator={() => null}
      onIndexChange={(index) => {
        setCurPage(index + 1);
      }}
      ref={swiper}
    >
      {data.data?.map((item, index) =>
        <Swiper.Item key={index}>
          <List header={'第 ' + `${index + 1}` + ' 题'}>
            <EachQuestion item={item} index={index} />
          </List>
        </Swiper.Item>
      )}
      <Swiper.Item>
        <Preview data={data} />
      </Swiper.Item>
    </Swiper>
  )
}