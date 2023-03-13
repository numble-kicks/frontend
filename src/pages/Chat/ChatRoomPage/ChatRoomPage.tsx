import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AppContainer, InputForm, MessageList, PageHeader } from 'components';
import { IChat, IChatUser, IUser } from 'types';
import { getMyData } from 'utils';

import * as StompJS from '@stomp/stompjs';

var client: StompJS.Client | null = null;

export const ChatRoomPage = () => {
  const { myData } = getMyData();
  const rooms = JSON.parse(sessionStorage.getItem('chats') || '{}') as {
    [k: string]: IChatUser;
  };

  const location = useLocation();
  const userData = location.state as IUser;
  const [roomList, setRoomList] = useState<{ [k: string]: IChatUser }>(rooms);

  const defaultMessage = {
    content: `Hi, I am ${
      userData.name.split(' ')[0]
    }. Feel free to ask me questions.`,
    createAt: new Date(),
    userId: userData.id,
    userName: userData.name
  };

  const [messages, setMessages] = useState<IChat[]>(
    rooms[userData.domain] ? rooms[userData.domain].chats : [defaultMessage]
  );

  const sendMessage = (text: string) => {
    setMessages(prev => [
      {
        content: text,
        createAt: new Date(),
        userId: myData.id,
        userName: myData.name
      },
      ...prev
    ]);
  };

  useEffect(() => {
    setRoomList(prev => ({
      ...prev,
      [userData.domain]: {
        buyerId: myData.id,
        buyerName: myData.name,
        sellerId: userData.id,
        sellerName: userData.name,
        sellerPhotoURL: userData.photoURL,
        chats: messages,
        id: String(new Date().getTime())
      }
    }));
  }, [userData, messages]);

  useEffect(() => {
    sessionStorage.setItem('chats', JSON.stringify(roomList));
  }, [roomList, messages]);

  /* // User Data
  const { data: chats } = useSWR(CHAT_LIST_API, fetcherWithToken);
  const chatData = chats?.data as IChatUser[];
  const room = chatData?.filter(
    chat => chat.sellerId === Number(id) || chat.buyerId === Number(id)
  )[0];

  const { mutate } = useSWR(CHAT_ROOM_API(room && room?.id), fetcherWithToken);
  const { data: user } = useSWR(USER_DATA_API(Number(id)), fetcherWithToken);
  const userData = user?.data as IUserData;

  const connect = () => {
    client = new StompJS.Client({
      brokerURL: WS_CONNECT_API,
      debug: function (str) {
        // console.log(str);
      },
      onConnect: () => {
        getMessage();
      },
      reconnectDelay: 10000, //자동 재 연결
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000
    });
    client.activate();
  };

  const disConnect = () => {
    if (client != null) {
      if (client.connected) client.deactivate();
    }
  };

  const getMessage = () => {
    if (client != null && client.connected) {
      client.subscribe(GET_MESSAGE_API(room?.id), () => {
        mutate();
      });
    }
  };

  const sendMessage = (text: string) => {
    if (client != null) {
      if (!client.connected) return;
      const message = { userId: 36, message: text };
      client.publish({
        destination: SEND_MESSAGE_API(room?.id),
        body: JSON.stringify(message)
      });
    }
  };

  useEffect(() => {
    connect();
    return () => disConnect();
  });

  // 채팅방 없으면 생성
  useEffect(() => {
    if (room === undefined) {
      const seller = { sellerId: id };
      axios
        .post(CHAT_LIST_API, JSON.stringify(seller), {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
          }
        })
        .then(() => {
          mutate();
        })
        .catch(error => console.log(error));
    }
  }, [room, id]);
  */

  return (
    <AppContainer>
      <PageHeader title={userData.name} backTo="/chats" />
      <MessageList messages={messages} profile={userData?.photoURL} />
      <InputForm sendMessage={sendMessage} />
    </AppContainer>
  );
};
