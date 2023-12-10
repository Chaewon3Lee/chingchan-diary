// ChatScreen.js
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useFirestoreQuery } from '@frontend'; // 올바른 경로로 업데이트

const ChatScreen = ({ route }) => {
  const { id } = route.params;

  // React Native용 firestore query hook을 모방합니다
  const useFirestoreQuery = (query) => {
    const [docs, setDocs] = useState([]);

    const queryRef = useRef(query);

    useEffect(() => {
      if (!queryRef.current?.isEqual(query)) {
        queryRef.current = query;
      }
    });

    useEffect(() => {
      if (!queryRef.current) {
        return null;
      }

      const unsubscribe = queryRef.current.onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setDocs(data);
      });

      return unsubscribe;
    }, [queryRef]);

    return docs;
  };

  const messagesRef = /* 메세지에 대한 실제 Firebase 참조로 교체하세요 */;

  const messages = useFirestoreQuery(
    messagesRef.orderBy('createdAt', 'desc').limit(1000)
  );

  const [newMessage, setNewMessage] = useState('');

  const handleOnChange = (text) => {
    setNewMessage(text);
  };

  const handleOnSubmit = () => {
    // 메세지 제출 로직을 구현하세요
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // Message 컴포넌트를 여기에 구현하세요
          <TouchableOpacity>
            <Text>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          value={newMessage}
          onChangeText={handleOnChange}
          placeholder="메세지를 입력하세요"
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginRight: 8 }}
        />
        <TouchableOpacity onPress={handleOnSubmit}>
          <Text style={{ color: 'blue' }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
