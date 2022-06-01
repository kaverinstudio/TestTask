import React from 'react';

const UserItem = (props) => {
    const user = props.user
    return (
        <div>
            {user.name}
        </div>
    );
};

export default UserItem;