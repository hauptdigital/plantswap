import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';
import styled from '@emotion/styled';
import { getUser } from '../../api/users';
import { useHistory } from 'react-router-dom';
import ProfileImage from './ProfileImage';
import UserName from './UserName';
import Location from './Location';
import About from './About';
import Container from '../Container';
import { ReactComponent as Loading } from '../../assets/loading.svg';

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

const EditProfile = styled.button``;

function UserProfile(props) {
    const { userName } = useParams();
    const history = useHistory();
    const { auth } = useContext(authContext);

    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState({});
    const [isCurrentUser, setIsCurrentUser] = React.useState(false);

    function handleEditProfileClick() {
        history.push('/my-profile/');
    }

    useEffect(() => {
        if (userName) {
            getUser(userName).then((user) => {
                setUser(user);
                setIsLoading(false);
                if (user.userName === auth.user) {
                    setIsCurrentUser(true);
                }
            });
        }
    }, [userName, auth.user]);

    if (isLoading) {
        return (
            <Container>
                <Loading />
            </Container>
        );
    }

    return (
        <>
            <ProfileWrapper>
                <ProfileLeft>
                    <ProfileImage source={user.profileImagePath} />
                </ProfileLeft>
                <ProfileRight>
                    <UserName>{user.userName}</UserName>
                    {isCurrentUser && (
                        <EditProfile onClick={handleEditProfileClick} value="Profil editieren">
                            Profil editieren
                        </EditProfile>
                    )}
                    <Location>{user.city}</Location>
                    <About>{user.about}</About>
                </ProfileRight>
            </ProfileWrapper>
        </>
    );
}

export default UserProfile;
