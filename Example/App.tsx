// import App from '../app';
import {useEffect} from 'react';
import {runOnUI, flattenArray} from 'react-native-reanimated';

function crazyWorklet() {
  'worklet';
  const arr = [[1], [2]];
  console.log(arr);
  const flatArr = flattenArray(arr);
  console.log(flatArr);
}

export default function Dupsko() {
  useEffect(() => {
    runOnUI(crazyWorklet)();
  });
  return null;
}
