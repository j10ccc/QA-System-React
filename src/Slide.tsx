import React from 'react';
import { Swiper } from 'antd-mobile';
import { SwiperRef } from 'antd-mobile/es/components/swiper';
import { useEffect, useRef } from 'react';
import EachQuestion from './components/EachQuection';
import Preview from './components/Preview';

export default function Slide(props: any) {
  const swiper = useRef<SwiperRef>(null);
  const {
    total,
    data,
    curPage,
    setCurPage,
    toggleAns,
    ansList,
    setScore,
    setLoadStatus
  } = props;
  useEffect(() => {
    swiper.current?.swipeTo(curPage - 1);
    let container: HTMLElement | null =
      document.querySelector('.adm-swiper-track');
    const curHeight =
      document.querySelectorAll('.question')[curPage - 1].clientHeight;
    if (curPage != total + 1) {
      if (curHeight < window.innerHeight - 151)
        container?.setAttribute('style', 'height: calc(100vh - 151px)');
      else container?.setAttribute('style', `height: ${curHeight}px`);
    } else {
      container?.setAttribute(
        'style',
        'height: ' + document.querySelector('.preview')?.clientHeight
      );
    }
  }, [curPage]);

  return (
    <Swiper
      loop={false}
      indicator={() => null}
      onIndexChange={(index) => {
        setCurPage(index + 1);
      }}
      ref={swiper}>
      {data.map((item: any, index: any) => (
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
        <Preview
          data={data}
          toggleAns={toggleAns}
          ansList={ansList}
          setCurPage={setCurPage}
          setScore={setScore}
          setLoadStatus={setLoadStatus}
        />
      </Swiper.Item>
    </Swiper>
  );
}
