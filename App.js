import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AccountScreen from "./app/screen/AccountScreen";
import MessagesSecreen from "./app/screen/MessagesSecreen";
import WelcomeScreen from "./app/screen/WelcomeScreen";

export default function App() {
  return <AccountScreen />;
}

