// Notice.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Notice() {
  return (
    <View style={styles.noticeContainer}>
      <Text style={styles.noticeText}>
        📝 칭찬 일기 쓰는 방법: 메인페이지를 참고해보세요! 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  noticeContainer: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    alignItems: 'center',
  },
  noticeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default Notice;
