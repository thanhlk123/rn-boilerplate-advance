import {execSync} from 'child_process';

import {getEnvJsonFromPath} from './common';

const bootDevice = (deviceName: string) => {
  try {
    // if simulator is not booted, it will throw an error
    execSync(
      `xcrun simctl list devices | grep "${deviceName}" | grep "Booted"`,
    );
  } catch {
    execSync(`xcrun simctl boot "${deviceName}"`);
  }

  return execSync(
    `xcrun simctl list devices | grep "${deviceName}" | grep "Booted" | grep -E -o -i "([0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12})"`,
  ).toString();
};

const uninstallOldApp = (bundleId: string) => {
  // uninstall app using xcrun
  execSync(`xcrun simctl uninstall booted "${bundleId}"`);
};

const run = (props: {platform: NodeJS.Platform; envPath: string}) => {
  if (props.platform !== 'darwin') {
    console.log('This script is only for macOS');

    return;
  }

  const envJson = getEnvJsonFromPath(props.envPath);

  const simulator = 'iPhone 14 Pro';

  const udid = bootDevice(simulator);

  uninstallOldApp(envJson.BUNDLE_IDENTIFIER);

  execSync(
    `npx react-native run-ios --scheme ${envJson.WORKSPACE_NAME}-${envJson.SCHEME_SUFFIX} --udid=${udid}`,
    {stdio: 'inherit'},
  );
};

(() => {
  const {argv, platform} = process;

  const actualArgv = argv.slice(2);

  const [nameFunc, envPath] = actualArgv;

  switch (nameFunc) {
    case 'run':
      run({platform, envPath});

      break;

    default:
      break;
  }
})();
