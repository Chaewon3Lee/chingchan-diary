import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FeedList from '../components/FeedList';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../contexts/LogContext';
import Notice from '../components/Notice'; 

function FeedsScreen() {
  const { logs } = useContext(LogContext);
  const [hidden, setHidden] = useState(false);

  const onScrolledToBottom = isBottom => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  return (
    <View style={styles.block}>
      <Notice />
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
}


const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedsScreen;
