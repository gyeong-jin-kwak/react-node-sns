import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { ADD_POST_REQUEST } from '../reducers/post';

const MyForm = styled(Form)`
  margin: 10px 0 20px;
`;

const PostForm = () => {
  const dispatch = useDispatch();
  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click()
  }, [imageInput.current]);
  const { imagePaths, addPostDone } = useSelector((state) => state.post);
  
  const [text, onChangeText, setText] = useInput('');
  // const [text, setText] = useState('');

  // const onChangeText = useCallback((e) => {
  //   setText(e.target.value)
  // }, [])

  useEffect(()=>{
    if(addPostDone) {
      setText('');
    }
  }, [addPostDone]);

  const onSubmit = useCallback(() => {
    dispatch({
      type: ADD_POST_REQUEST,
      data: text,
    })
  }, [text])

  return (
    <MyForm encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요?"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">
          짹짹
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={v} style={{ width: '200px' }} alt={v} />

            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </MyForm>
  )
}

export default PostForm
