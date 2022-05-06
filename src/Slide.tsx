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

  const len = data.data?.length || 0;

  useEffect(() => {
    swiper.current?.swipeTo(curPage - 1);
    let container: HTMLElement | null = document.querySelector(".adm-swiper-track");
    let item: HTMLElement | null;
    if (curPage != len + 1) item = document.querySelectorAll('.question')[curPage - 1];
    else item = document.querySelector('.preview');
    container?.setAttribute('style', 'height: ' + item.clientHeight + 'px');

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
          <EachQuestion item={item} index={index} />
        </Swiper.Item>
      )}
      <Swiper.Item>
        <Preview data={data} />
      </Swiper.Item>
    </Swiper>
  )
}