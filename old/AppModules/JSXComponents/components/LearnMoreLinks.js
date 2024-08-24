/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';
import Colors from './Colors';
import LinkStyles from './LinkStyles';
import type {Node} from 'react';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const links = [
  {
    id: 1,
    title: 'Ready to just dive-in?',
    link: 'https://reactnative.dev/docs/environment-setup',
    description: 'Setup your own local React Forge on your own computer .',
  },
  {
    id: 2,
    title: 'The Basics',
    link: 'https://reactnative.dev/docs/tutorial',
    description: 'Explains a Hello World for React Native.',
  },
  {
    id: 3,
    title: 'Style',
    link: 'https://reactnative.dev/docs/style',
    description:
      'Covers how to use the prop named style which controls the visuals.',
  },
  {
    id: 4,
    title: 'Layout',
    link: 'https://reactnative.dev/docs/flexbox',
    description: 'React Native uses flexbox for layout, learn how it works.',
  },
  {
    id: 5,
    title: 'Components',
    link: 'https://reactnative.dev/docs/components-and-apis',
    description: 'The full list of components and APIs inside React Native.',
  },
  {
    id: 6,
    title: 'Navigation',
    link: 'https://reactnative.dev/docs/navigation',
    description:
      'How to handle moving between screens inside your application.',
  },
  {
    id: 7,
    title: 'Networking',
    link: 'https://reactnative.dev/docs/network',
    description: 'How to use the Fetch API in React Native.',
  },
  {
    id: 8,
    title: 'Help',
    link: 'https://reactnative.dev/help',
    description:
      'Need more help? There are many other React Native developers who may have the answer.',
  },
  {
    id: 9,
    title: 'Follow React Native on Twitter',
    link: 'https://twitter.com/reactnative',
    description:
      'Stay in touch with the community, join in on Q&As and more by following React Native on Twitter.',
  },
];

const LinkList = (): Node => (
  <View style={linkStyles.container}>
    <View style={linkStyles.linkContainer}>
      <Text style={linkStyles.linkNotice}>These links go to section on https://reactnative.dev</Text>
    </View>
    {links.map(({id, title, link, description}) => {
      return (
        <React.Fragment key={id}>
          <View style={linkStyles.separator} />
          <TouchableOpacity
            accessibilityRole={'button'}
            onPress={() => openURLInBrowser(link)}
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

export default LinkList;
