/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * adapted from https://github.com/facebook/react-native/Libraries/NewAppScreen
 *
 * @flow strict-local
 * @format
 */

'use strict';

import type {Node} from 'react';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

const ForAndroid = () => {
  return (
    global.HermesInternal == null ? null : (
    <View style={styles.engine}>
      <Text style={styles.footer}>Engine: Hermes</Text>
    </View>
   )
  )
};

export default ForAndroid
