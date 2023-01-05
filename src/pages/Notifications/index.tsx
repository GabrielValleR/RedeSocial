import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { RootStackParamList } from '~/routes/types';

import api from '~/services/api';

import Header from '~/components/Header';
import MyStatusBar from '~/components/MyStatusBar';

import {
  ActionText,
  Caption,
  ClickImage,
  Container,
  NotificationsDivider,
  UserActionContainer,
  UserAvatar,
  UserContainer,
  Username,
} from './styles';

import closeIcon from '~/assets/icons/close.png';

// const NOTIFICATIONS: NotificationsType[] = Array.from(
//   { length: 25 },
//   (v, k) => ({
//     id: k,
//     username: '@teste',
//     avatar: 'https://avatars.githubusercontent.com/u/20052351?v=4',
//     action: 'comentou sua publicação',
//     click:
//       k % 2
//         ? null
//         : {
//             image: 'https://avatars.githubusercontent.com/u/20052351?v=4',
//           },
//   }),
// );

interface INotification {
  id: number;
  user: {
    username: string;
    avatar: string;
  };
  action: string;
  click?: { image: string } | null;
}

const Notifications: React.FC = () => {
  const { goBack } = useNavigation<NavigationProp<RootStackParamList>>();

  const [notifications, setNotifications] = useState<INotification[]>([]);

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('/notifications');
      if (response.data) {
        setNotifications(response.data.notifications);
      }
    }
    loadNotifications();
  }, []);

  const renderNotifications = ({ item }: { item: INotification }) => {
    return (
      <UserContainer>
        <UserAvatar source={{ uri: item.user.avatar }} />
        <UserActionContainer>
          <Username>
            {item.user.username} <ActionText>{item.action}</ActionText>
          </Username>
        </UserActionContainer>
        {item.click && <ClickImage source={{ uri: item.click.image }} />}
      </UserContainer>
    );
  };

  const renderHeaderNotifications = () => {
    return (
      <>
        <Caption>Hoje</Caption>
      </>
    );
  };

  const renderSeparatorItem = (item: any) => {
    return (
      <>
        {item.leadingItem.id === '3' && (
          <>
            <NotificationsDivider />
            <Caption>Recentes</Caption>
          </>
        )}
      </>
    );
  };

  return (
    <>
      <MyStatusBar barStyle={'light-content'} />
      <Container>
        <Header title="Notificações" icon={closeIcon} action={() => goBack()} />

        <FlatList
          data={notifications}
          renderItem={renderNotifications}
          ListHeaderComponent={renderHeaderNotifications}
          ItemSeparatorComponent={item => renderSeparatorItem(item)}
        />
      </Container>
    </>
  );
};

export default Notifications;
