import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AccountScreen from "./app/screen/AccountScreen";
import CreateRoom from "./app/screen/CreateRoom";
import LoginScreen from "./app/screen/LoginScreen";
import MessagesSecreen from "./app/screen/MessagesSecreen";
import RegisterScreen from "./app/screen/RegisterScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import WelcomeScreen from "./app/screen/WelcomeScreen";

export default function App() {
  return <CreateRoom />;
}

