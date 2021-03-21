import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import 'jest-styled-components/native';

jest.useFakeTimers();

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
