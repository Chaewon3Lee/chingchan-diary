import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {Alert, KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteEditor from '../components/WriteEditor';
import WriteHeader from '../components/WriteHeader';
import LogContext from '../contexts/LogContext';

function WriteScreen({route}) {
  const log = route.params?.log;

  const [title, setTitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');
  const navigation = useNavigation();
  const [date, setDate] = useState(log ? new Date(log.date) : new Date());
  const [selectedEmotion, setSelectedEmotion] = useState(log?.selectedEmotion ?? 'happy'); // 기본값 변경
  const [selectedWeather, setSelectedWeather] = useState(log?.selectedWeather ?? 'sunny'); // 기본값 변경

  const {onCreate, onModify, onRemove} = useContext(LogContext);

  const onAskRemove = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠어요?',
      [
        {text: '취소', style: 'cancel'},
        {
          text: '삭제',
          onPress: () => {
            onRemove(log?.id);
            navigation.pop();
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const onSave = () => {
    if (log) {
      onModify({
        id: log.id,
        date: date.toISOString(),
        title,
        body,
        selectedEmotion,
        selectedWeather,
      });
    } else {
      onCreate({
        title,
        body,
        date: date.toISOString(),
        selectedEmotion,
        selectedWeather,
      });
    }
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader
          onSave={onSave}
          onAskRemove={onAskRemove}
          isEditing={!!log}
          date={date}
          onChangeDate={setDate}
        />

        <WriteEditor
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
          selectedEmotion={selectedEmotion}
          onChangeEmotion={setSelectedEmotion} // 변경된 부분
          selectedWeather={selectedWeather}
          onChangeWeather={setSelectedWeather} // 변경된 부분
        
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidingView: {
    flex: 1,
  },
});

export default WriteScreen;