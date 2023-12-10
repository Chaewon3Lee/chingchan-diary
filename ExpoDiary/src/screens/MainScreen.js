import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import WebView from 'react-native-webview';

function MainScreen() {
  const [compliments, setCompliments] = useState([]);

  const youtubeVideoId = 'z2YAZBPgL1w'; // 여기에 유튜브 비디오 ID를 넣어주세요.

  return (
    <View style={styles.container}>
      <Text style={styles.title}> [ 행복한 칭찬 다이어리 ] </Text>

      <Text style={styles.subtitle}>칭찬 일기 작성법 🖊️ </Text>
      <Text style={styles.description}>
        오늘 하루동안 자신이 생각하기에 좋았다고 생각하는 자신의 '행동'을 칭찬하는 것입니다.
      </Text>
      <Text style={styles.example}>예) 버스에서 자리를 양보하다니 난 친절해 {'\n'}</Text>
      <Text style={styles.description}>
        자기 자신에 대해 마땅히 칭찬할 점이 없다면 그동안 하려고 했지만 하지 않아서 좋았던 것이나, 개선했던 나쁜 습관에 대해 칭찬합니다.
      </Text>
      <Text style={styles.example}>예) 3년이나 담배를 끊다니 난 대단해. 인내심이 있어. {'\n'}</Text>

      <Text style={styles.subsubtitle}>[참고] 칭찬 언어 예시 </Text>
      <Text style={styles.example}>
        잘했어, 훌륭해, 멋져, 굉장해, 착해, 좋았어, 대견스러워{'\n'}
        친절해, 똑똑해, 충분해, 대범해, 마음이 넓어, 역시 나야
      </Text>

      <Text style={styles.subsubtitle}>[참고] 칭찬 일기를 쓰면 좋은점 </Text>
      <View style={styles.youtubeContainer}>
        <WebView
          source={{ uri: `https://www.youtube.com/embed/${youtubeVideoId}` }}
          style={styles.youtubeVideo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#555',
  },
  subsubtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#777',
  },
  description: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  example: {
    fontSize: 12,
    marginBottom: 8,
    color: '#444',
  },
  youtubeContainer: {
    flex: 1,
    aspectRatio: 1,
    marginBottom: 16,
  },
  youtubeVideo: {
    flex: 1,
    borderRadius: 8,
  },
});

export default MainScreen;
