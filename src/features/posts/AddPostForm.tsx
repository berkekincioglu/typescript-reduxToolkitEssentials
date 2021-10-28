import React, { useState } from 'react';
// import { StyleSheet } from '../../utils/StyleSheet';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { postAdded } from './postsSlice';

import { Form, Input, Button, Select } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const users = useAppSelector((state) => state.users);

  const [form] = Form.useForm();

  const { TextArea } = Input;
  const { Option } = Select;

  const dispatch = useAppDispatch();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle('');
      setContent('');
    }
  };

  const onTitleChanged = (e: React.FormEvent<HTMLInputElement>): void =>
    setTitle(e.currentTarget.value);
  const onContentChanged = (e: React.FormEvent<HTMLTextAreaElement>): void =>
    setContent(e.currentTarget.value);
  // const onAuthorChanged = (e: React.ChangeEvent<HTMLSelectElement>): void =>
  //   setUserId(e.target.value);
  const onAuthorChanged = (e: any): void => setUserId(e);

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <Option key={user.id} value={user.id}>
      {user.name}
    </Option>
  ));

  return (
    <Form form={form} layout='vertical'>
      <Form.Item label='Title' required tooltip='This is a required field'>
        <Input
          placeholder='input placeholder'
          value={title}
          onChange={onTitleChanged}
        />
      </Form.Item>
      {/* <label htmlFor='postAuthor'>Author:</label> */}
      {/* <select id='postAuthor' value={userId} onChange={onAuthorChanged}>
        <option value=''></option>
        {usersOptions}
      </select> */}
      <Select
        defaultValue={userId}
        style={{ width: 120 }}
        onChange={onAuthorChanged}
      >
        {usersOptions}
      </Select>
      <Form.Item
        required
        label='Content'
        tooltip={{
          title: 'Tooltip with customize icon',
          icon: <InfoCircleOutlined />,
        }}
      >
        <TextArea
          placeholder='input placeholder'
          value={content}
          onChange={onContentChanged}
          rows={6}
          style={{ width: '90vw' }}
        />
      </Form.Item>
      <Form.Item>
        <Button disabled={!canSave} onClick={onSavePostClicked} type='primary'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddPostForm;

// <div style={styles.container}>
// <form style={{ ...styles.container, ...styles.form }}>
//   <h2>Add a New Post</h2>

//   <label htmlFor='postTitle'>Post Title: </label>
//   <input
//     type='text'
//     id='postTitle'
//     name='postTitle'
//     value={title}
//     onChange={onTitleChanged}
//   />

//   <label htmlFor='postContent'>Post Content: </label>
//   <textarea
//     id='postContent'
//     name='postContent'
//     value={content}
//     onChange={onContentChanged}
//     style={styles.textArea}
//   />

//   <button type='button' onClick={onSavePostClicked}>
//     Save Post
//   </button>
// </form>
// </div>

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     flexDirection: 'column',
//   },
//   form: {
//     margin: '30px',
//   },
//   textArea: {
//     width: '200px',
//     height: '100px',
//   },
// });
