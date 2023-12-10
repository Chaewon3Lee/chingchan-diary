import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

const emotions = [
  { label: '😊', value: 'happy' },
  { label: '😢', value: 'sad' },
  { label: '😡', value: 'angry' },
  { label: '😌', value: 'calm' },

];

const weathers = [
  { label: '☀️', value: 'sunny' },
  { label: '☁️', value: 'cloudy' },
  { label: '🌧️', value: 'rainy' },
  { label: '❄️', value: 'snowy' },

];

function WriteEditor({
  title,
  body,
  onChangeTitle,
  onChangeBody,
  selectedEmotion,
  onChangeEmotion, // Add this prop
  selectedWeather,
  onChangeWeather, // Add this prop
}) {
  return (
    <View style={styles.block}>
      <View style={styles.radioGroup}>
        <Text style={styles.Text1}>오늘의 기분</Text>
        <RadioForm formHorizontal={true} animation={true}>
          {emotions.map((obj, i) => (
            <RadioButton labelHorizontal={false} key={i} style={styles.radioButton}>
              <RadioButtonLabel
                obj={obj}
                index={i}
                labelHorizontal={false}
                onPress={() => onChangeEmotion(i)}  c
                labelStyle={{ fontSize: 18, color: '#000'  }}
                labelWrapStyle={{ marginBottom: 0 }}
              />
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={selectedEmotion === i}
                onPress={() => onChangeEmotion(i)}  
                borderWidth={1}
                buttonInnerColor={'#2196f3'}
                buttonOuterColor={selectedEmotion === i ? '#2196f3' : '#000'}
                buttonSize={30}
                buttonOuterSize={70}
                buttonStyle={{ transform: [{ scale: 0.2 }] }}
                buttonWrapStyle={{ marginBottom: 10 }}
              />
            </RadioButton>
          ))}
        </RadioForm>
      </View>

      <View style={styles.radioGroup}>
        <Text style={styles.Text1}>오늘의 날씨</Text>
        <RadioForm formHorizontal={true} animation={true}>
          {weathers.map((obj, i) => (
            <RadioButton labelHorizontal={false} key={i} style={styles.radioButton}>
              <RadioButtonLabel
                obj={obj}
                index={i}
                labelHorizontal={false}
                onPress={() => onChangeWeather(i)} 
                labelStyle={{ fontSize: 18, color: '#000' }}
                labelWrapStyle={{ marginBottom: 0 }}
              />
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={selectedWeather === i}
                onPress={() => onChangeWeather(i)}  
                borderWidth={1}
                buttonInnerColor={'#2196f3'}
                buttonOuterColor={selectedWeather === i ? '#2196f3' : '#000'}
                buttonSize={30}
                buttonOuterSize={70}
                buttonStyle={{ transform: [{ scale: 0.2 }] }}
                buttonWrapStyle={{ marginBottom: 10 }}
              />
            </RadioButton>
          ))}
        </RadioForm>
      </View>

      <TextInput
        placeholder="제목을 입력하세요"
        style={styles.titleInput}
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
      />
      <TextInput
        placeholder="오늘의 칭찬을 적어주세요"
        style={styles.bodyInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: { flex: 1, padding: 16 },
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263238',
  },
  radioGroup: {
    marginBottom: 0,
    justifyContent:'center',
    marginTop:15,
    
  },
  radioLabel: {
    fontSize: 15,
    marginBottom:30,
    
  },
  radioButton: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 8,
   // 조절 가능한 값
    height: 70, 
  },
  Text1:{
    fontSize: 18,
    marginBottom:30,
  },
});

export default WriteEditor;