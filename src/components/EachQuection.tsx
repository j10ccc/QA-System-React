import { CheckList, List, Space, Tag } from 'antd-mobile';
import { ListItem } from 'antd-mobile/es/components/list/list-item';

enum TopicEnum {
  单选 = 1,
  多选,
}
export default function EachQuestion(props: any) {
  const { item, index, toggleAns, field } = props;
  return (
    <>
      <List header={'第 ' + `${index + 1}` + ' 题'} className='question'>
        <ListItem key={index}>
          <Space>
            <span>{item.topic}</span>
            <Tag color={item.type === 2 ? 'primary' : undefined}>
              {TopicEnum[item.type]}
            </Tag>
          </Space>
        </ListItem>
        <CheckList
          multiple={item.type == 2}
          onChange={(value: string[]) => {
            return toggleAns({
              id: item.index,
              key: value,
            });
          }}
          value={field.key}
        >
          {item.options.map((item: any, index: any) => (
            <CheckList.Item value={`${item.index}`} key={index}>
              {String.fromCharCode(index + 65) + '. ' + item.content}
            </CheckList.Item>
          ))}
        </CheckList>
      </List>
    </>
  );
}
