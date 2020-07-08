import React from 'react';
import styled from '@emotion/styled';
import Image from '../elements/Image';

const ProfileImageWrapper = styled.div`
    max-width: 120px;
    padding-top: 12px;
`;

function ProfileImage(props) {
    return (
        <ProfileImageWrapper>
            <Image source={props.source} />
        </ProfileImageWrapper>
    );
}

export default ProfileImage;
