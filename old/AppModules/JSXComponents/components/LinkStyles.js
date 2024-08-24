/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * adapted from https://github.com/facebook/react-native
 *
 * @flow strict-local
 * @format
 */

'use strict';
import Colors from './Colors';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';


const LinkStyles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  linkNotice: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.primary,
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: Colors.dark,
  },
  separator: {
    backgroundColor: Colors.light,
    height: 1,
  },
});

export default LinkStyles;
