import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { techActions } from '~/redux';

function TechnologyScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(techActions.fetchTechnologiesAction());
  }, [dispatch]);

  return (
    <View>
      <Text>Technology</Text>
    </View>
  );
}
export default TechnologyScreen;
