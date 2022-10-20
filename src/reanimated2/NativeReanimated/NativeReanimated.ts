import { NativeModules } from 'react-native';
import {
  SharedValue,
  SensorValue3D,
  SensorValueRotation,
  AnimatedKeyboardInfo,
} from '../commonTypes';
import { Descriptor } from '../hook/commonTypes';

type Shareable = {
  __thereIsNothingHereImJustMakingTypescriptHappy: number;
};

export class NativeReanimated {
  native: boolean;
  private InnerNativeModule: any;

  constructor(native = true) {
    if (global.__reanimatedModuleProxy === undefined && native) {
      const { ReanimatedModule } = NativeModules;
      ReanimatedModule?.installTurboModule();
    }
    this.InnerNativeModule = global.__reanimatedModuleProxy;
    this.native = native;
  }

  installCoreFunctions(
    valueSetter: <T>(value: T) => void,
    valueUnpacker
  ): void {
    return this.InnerNativeModule.installCoreFunctions(
      valueSetter,
      valueUnpacker
    );
  }

  makeShareableClone<T>(value: T): Shareable {
    return this.InnerNativeModule.makeShareableClone(value);
  }

  scheduleOnUI(shareable: Shareable) {
    return this.InnerNativeModule.scheduleOnUI(shareable);
  }

  makeShareable<T>(value: T): T {
    throw new Error('who dis');
    return this.InnerNativeModule.makeShareable(value);
  }

  makeMutable<T>(value: T): SharedValue<T> {
    throw new Error('who dis');
    return this.InnerNativeModule.makeMutable(value);
  }

  makeRemote<T>(object = {}): T {
    throw new Error('who dis');
    return this.InnerNativeModule.makeRemote(object);
  }

  registerSensor(
    sensorType: number,
    interval: number,
    sensorData: SensorValue3D | SensorValueRotation
  ) {
    return this.InnerNativeModule.registerSensor(
      sensorType,
      interval,
      sensorData
    );
  }

  unregisterSensor(sensorId: number) {
    return this.InnerNativeModule.unregisterSensor(sensorId);
  }

  startMapper(
    mapper: () => void,
    inputs: any[] = [],
    outputs: any[] = [],
    updater: () => void,
    viewDescriptors: Descriptor[] | SharedValue<Descriptor[]>
  ): number {
    throw new Error('who dis');
    return this.InnerNativeModule.startMapper(
      mapper,
      inputs,
      outputs,
      updater,
      viewDescriptors
    );
  }

  stopMapper(mapperId: number): void {
    throw new Error('who dis');
    return this.InnerNativeModule.stopMapper(mapperId);
  }

  registerEventHandler<T>(
    eventHash: string,
    eventHandler: (event: T) => void
  ): string {
    return this.InnerNativeModule.registerEventHandler(eventHash, eventHandler);
  }

  unregisterEventHandler(id: string): void {
    return this.InnerNativeModule.unregisterEventHandler(id);
  }

  getViewProp<T>(
    viewTag: string,
    propName: string,
    callback?: (result: T) => void
  ): Promise<T> {
    return this.InnerNativeModule.getViewProp(viewTag, propName, callback);
  }

  enableLayoutAnimations(flag: boolean): void {
    this.InnerNativeModule.enableLayoutAnimations(flag);
  }

  configureProps(uiProps: string[], nativeProps: string[]): void {
    this.InnerNativeModule.configureProps(uiProps, nativeProps);
  }

  subscribeForKeyboardEvents(keyboardEventData: AnimatedKeyboardInfo): number {
    return this.InnerNativeModule.subscribeForKeyboardEvents(keyboardEventData);
  }

  unsubscribeFromKeyboardEvents(listenerId: number): void {
    this.InnerNativeModule.unsubscribeFromKeyboardEvents(listenerId);
  }
}