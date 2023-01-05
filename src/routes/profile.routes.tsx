import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from '~/pages/Profile';
import Followers from '~/pages/Followers';
import Following from '~/pages/Following';
import ConfigProfile from '~/pages/ConfigProfile';
import EditProfile from '~/pages/EditProfile';
import EditPassword from '~/pages/EditPassword';
import EditAccountInfo from '~/pages/EditAccountInfo';
import ProfileAlbum from '../pages/ProfileAlbum';
import ReportPerson from '~/pages/report';
import CompletedReport from '~/pages/CompletedReport';
import ReportProblem from '~/pages/ReportProblem';
import EditPhoto from '~/pages/EditPhoto';
import EditAlbum from '../pages/EditAlbum';
import EditMuralPhoto from '~/pages/EditMuralPhoto';
import EditMural from '~/pages/EditMural';
import PhotoOption from '~/pages/PhotoOption';
import PublishClick from '~/pages/PublishClick';
import PublishWallBasic from '~/pages/PublishWallBasic47';
import PublishWallWithParticipants from '~/pages/PublishWallWithParticipants44';
import PublishWallComplete from '~/pages/PublishWallComplete41';

const ProfileStack = createNativeStackNavigator();

const ProfileRoutes = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Followers" component={Followers} />
      <ProfileStack.Screen name="Following" component={Following} />
      <ProfileStack.Screen name="ConfigProfile" component={ConfigProfile} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
      <ProfileStack.Screen name="EditPassword" component={EditPassword} />
      <ProfileStack.Screen name="EditAccountInfo" component={EditAccountInfo} />
      <ProfileStack.Screen name="ProfileAlbum" component={ProfileAlbum} />
      <ProfileStack.Screen name="ReportPerson" component={ReportPerson} />
      <ProfileStack.Screen name="CompletedReport" component={CompletedReport} />
      <ProfileStack.Screen name="ReportProblem" component={ReportProblem} />
      <ProfileStack.Screen name="EditPhoto" component={EditPhoto} />
      <ProfileStack.Screen name="EditAlbum" component={EditAlbum} />
      <ProfileStack.Screen name="EditMural" component={EditMural} />
      <ProfileStack.Screen name="EditMuralPhoto" component={EditMuralPhoto} />
      <ProfileStack.Screen name="PhotoOption" component={PhotoOption} />
      <ProfileStack.Screen name="PublishClick" component={PublishClick} />
      <ProfileStack.Screen
        name="PublishWallBasic"
        component={PublishWallBasic}
      />
      <ProfileStack.Screen
        name="PublishWallWithParticipants"
        component={PublishWallWithParticipants}
      />
      <ProfileStack.Screen
        name="PublishWallComplete"
        component={PublishWallComplete}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileRoutes;
