import React from 'react';
import { Button, Form, Input } from 'antd-mobile';

export default function Login(props: any) {
  const { form } = props;
  function checkUid(_: any, uid: string) {
    if (!/^\d+$/.test(uid)) return Promise.reject(new Error('学号格式错误'));
    if (uid && uid.length != 12)
      return Promise.reject(new Error('学号长度应为12位'));
    // TODO: unkown uid convention
    return Promise.resolve();
  }
  return (
    <Form layout="vertical" ref={form}>
      <Form.Item
        label="姓名"
        name="name"
        rules={[{ required: true, message: '姓名不能为空' }]}>
        <Input placeholder="请输入姓名" />
      </Form.Item>
      <Form.Item
        label="学号"
        name="uid"
        rules={[{ required: true }, { validator: checkUid }]}>
        <Input placeholder="请输入学号" />
      </Form.Item>
    </Form>
  );
}
