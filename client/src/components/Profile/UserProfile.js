import React from 'react';
import styled from '@emotion/styled';
import ProfileImage from './ProfileImage';
import UserName from './UserName';
import Location from './Location';
import About from './About';
import Products from '../Products/Products';

const ProfileWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ProfileLeft = styled.div`
    flex-basis: 31%;
    display: flex;
    justify-content: center;
`;

const ProfileRight = styled.div`
    flex-basis: 69%;
    display: flex;
    flex-direction: column;
`;

const Plants = styled.section``;

function UserProfile(props) {
    return (
        <>
            <ProfileWrapper>
                <ProfileLeft>
                    <ProfileImage source="250.png">ProfileImage</ProfileImage>
                </ProfileLeft>
                <ProfileRight>
                    <UserName>UserName</UserName>
                    <Location>Location</Location>
                </ProfileRight>
            </ProfileWrapper>
            <About>About</About>
            <Products />
        </>
    );
}

export default UserProfile;
