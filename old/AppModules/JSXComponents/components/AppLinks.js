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
import LinkStyles from './LinkStyles';
import type {Node} from 'react';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import {Alert, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const links = [
  {
    id: 1,
    title: 'Random Qoutes',
    link: '',
    description: 'Displays random qoutes with music that matches',
  },
  {
    id: 2,
    title: 'Tic-Tac-Toe',
    link: '',
    description: 'Play Tic-Tac-Toe, against a computer or a human',
  },
  {
    id: 3,
    title: 'Calculator',
    link: '',
    description:
      'A basic calculator',
  },
  {
    id: 4,
    title: 'Weather',
    link: '',
    description: 'Get current and forecasted weather for any place on Earth',
  },
  {
    id: 5,
    title: 'Compass',
    link: '',
    description: 'A digital compass',
  },
  {
    id: 6,
    title: 'Calendar',
    link: '',
    description:'A basic calendar app',
  },
  {
    id: 7,
    title: 'Utilities',
    link: '',
    description: 'Stats and tools for the geek in all of us. ',
  },
  {
    id: 8,
    title: 'Helper',
    link: '',
    description: 'Shows what stuff is nearby',
  },
  {
    id: 9,
    title: 'Note Taker',
    link: '',
    description: 'Just a simple note taking app',
  },
];

const AppLinks = (): Node => (
  <View style={linkStyles.container}>
    <View style={linkStyles.linkContainer}>
      <Text style={linkStyles.linkNotice}>A Wish List of Native React Apps</Text>
    </View>
    {links.map(({id, title, link, description}) => {
      return (
        <React.Fragment key={id}>
          <View style={linkStyles.separator} />
          <TouchableOpacity
            accessibilityRole={'button'}
            onPress={() => Alert.alert('Comming Soon')}
            style={linkStyles.linkContainer}>
            <Text style={linkStyles.link}>{title}</Text>
            <Text style={linkStyles.description}>{description}</Text>
          </TouchableOpacity>
        </React.Fragment>
      );
    })}
  </View>
);

const linkStyles = LinkStyles;

export default AppLinks;
