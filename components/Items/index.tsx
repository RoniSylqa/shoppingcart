import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {ItemsProps} from '../../store/types';
import {useSelector} from 'react-redux';
import SingleItem from '../SingleItem';
import {DUMMY_ITEM} from '../../helpers';

const Items = ({isShowingCart}: ItemsProps) => {
  const {cart} = useSelector((state: any) => state.userReducer);
  const cartUpdated = cart?.length > 0 ? cart : [];
  return (
    <View style={styles.container}>
      <FlatList
        data={isShowingCart ? cartUpdated : DUMMY_ITEM}
        renderItem={({item}) => (
          <SingleItem
            removeButton={isShowingCart}
            name={item.name}
            price={item.price}
            id={item.id}
          />
        )}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default Items;
