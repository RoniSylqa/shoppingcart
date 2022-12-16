import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {Item} from '../../store/types';
import {useDispatch} from 'react-redux';
import {addItemToCart, removeItemFromCart} from '../../store/actions';

const SingleItem = (props: Item) => {
  const {id, name, price, removeButton} = props;
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.priceAndText}>
        <Text> {name} </Text>
        <Text> {price}$</Text>
      </View>

      {!removeButton && (
        <Button
          title="Add To Cart"
          onPress={() => dispatch(addItemToCart({id, name, price}) as any)}
        />
      )}
      {removeButton && (
        <Button
          title="Remove from"
          onPress={() => dispatch(removeItemFromCart(id) as any)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
  },
  priceAndText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SingleItem;
