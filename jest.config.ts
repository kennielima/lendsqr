// import type {Config} from 'jest';

// export default async (): Promise<Config> => {
//   return {
//     verbose: true,
//     testEnvironment: 'jsdom',
//     preset: 'ts-jest',  
//   };
// };


import type {Config} from 'jest';

const config: Config = {
  verbose: true,
    testEnvironment: 'jsdom',
    preset: 'ts-jest', 
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy', // Example for mocking styles
      '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/path/to/imageMock.js', // Example for mocking images
    },
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    }
};

export default config;