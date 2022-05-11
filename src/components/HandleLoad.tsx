import { DotLoading, ErrorBlock, SpinLoading } from 'antd-mobile';

export enum LoadStatusEnum {
  SUCCESS,
  Loading,
  BUSY,
}

export default function HandleLoad(props: any) {
  const { statusCode, errorInfo } = props;
  const status: any = LoadStatusEnum[statusCode].toLowerCase();
  if (statusCode === 1)
    return <ErrorBlock fullPage title='加载中' description={<DotLoading />} />;
  else
    return (
      <ErrorBlock
        fullPage
        status={status}
        title={errorInfo.msg}
        description={errorInfo.code}
      />
    );
}
