import { Navigation } from 'react-native-navigation';
import {PendoSDK, NavigationLibraryType}  from 'rn-applause';

// Note:
// in order to test Redux and MobX separately,
// please comment unnecessary import, this is important
// because RNN registers screens for both of them if two imports are presented

// import { startApp as startReduxApp } from './srcRedux/App';
import { startApp as startMobXApp } from './srcMobX/App';

Navigation.events().registerAppLaunchedListener(() => {
    // startReduxApp();
    startMobXApp();
    const initParams = {visitorId: 'blustart111',accountId:'blust333art111'};
    const navigationOptions = {library: NavigationLibraryType.ReactNativeNavigation, navigation: Navigation};
    const pendoKey = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IiIsInR5cCI6IkpXVCJ9.eyJkYXRhY2VudGVyIjoidXMiLCJrZXkiOiI0ZGIxYzBkOWExYThmODM4NDg2M2UwZDdkZDJjZWI3ODQ2MWZhMGQyZmRhYzc4MGZlMDg3MmE0NDQzYjMzMzI5ZjI3ZGZiNDZlMzI2YjhmMmIwOTRmNDdjNDQ3MTAwYTYwNTk2ZjNhMTU5YWQyYjU3NjVhYzc4MGU5NzY1MGFlZTQxMWY1OWM3NTkyNWU0MDU5MzliNDAzOGZlMGU4NTZkNTkyODYyMjZmY2U2YzY4MGZlOTIzYmJjYmRiYzNiZmUxZTc4NWQyMTM4YjQzYTgxNTBhYTU3ODY0MmFhMTAyYS42YTk1ODgxY2Y3MTI0ZGNmMTM5NjBlMjI5NjlmZDRiNC4yYmQwZWNhZmViNzM1NmVmMjcwZDYzNTMzNjI5MjViNGU1MDg5ZDdjMTMyMjE2NmExNTBmNjc4OTNjMmMyNjM0In0.ql_uW3TDCqZW2bWZd-dp6NKnKs9zS7Ai1IYKdPHlfEP0rxHAVFo-8JSTc3UGYzPr0JyGpJ_PCoKhl4iPZPlZqQfemg0TZFUSB9STQhQr7DgSyQMNmEt4ilSP8rknz2ccT2C2pCB2-xY1ffpuw8wFicfRPsXCdLvZRC3YNoXxbX4';
    PendoSDK.initSdk(pendoKey, initParams, navigationOptions);
});