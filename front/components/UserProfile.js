import React, { useCallback } from 'react';
import { Button, Card } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';

const UserProfile = ({ setIsLoggedIn }) => {
    const onLogout = useCallback(()=>{
        setIsLoggedIn(false);
    }, [])

    return (
        <Card
            actions={[
                <div key="twit">게시물<br />0</div>,
                <div key="followings">팔로잉<br />0</div>,
                <div key="followers">팔로워<br />0</div>
            ]}
        >
            <Card.Meta 
                title="곽경진"
                avatar={<Avatar>GJ</Avatar>} 
            />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;