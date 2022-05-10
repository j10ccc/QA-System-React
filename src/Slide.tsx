import { List, Swiper } from 'antd-mobile';
import { SwiperRef } from 'antd-mobile/es/components/swiper';
import { useContext, useEffect, useRef } from 'react';
import { DataContext } from './App';
import EachQuestion from './components/EachQuection';
import Preview from './components/Preview';

export default function Slide(props: any) {
  const data = useContext(DataContext);
  const swiper = useRef<SwiperRef>(null);
  const { curPage, setCurPage, toggleAns, ansList } = props;

  const len = data.length || 0;

  useEffect(() => {
    swiper.current?.swipeTo(curPage - 1);
    let container: HTMLElement | null =
      document.querySelector('.adm-swiper-track');
    if (curPage != len + 1)
      container?.setAttribute('style', 'height: calc(100vh - 160px)');
    else
      container?.setAttribute(
        'style',
        'height: ' + document.querySelector('.preview')?.clientHeight,
      );
  }, [curPage]);

  return (
    <Swiper
      loop={false}
      indicator={() => null}
      onIndexChange={(index) => {
        setCurPage(index + 1);
      }}
      ref={swiper}
    >
      {data.map((item, index) => (
        <Swiper.Item key={index}>
          <EachQuestion
            item={item}
            index={index}
            toggleAns={toggleAns}
            field={ansList[item.index]}
          />
        </Swiper.Item>
      ))}
      <Swiper.Item>
        <Preview data={data} toggleAns={toggleAns} ansList={ansList} />
      </Swiper.Item>
    </Swiper>
  );
}
