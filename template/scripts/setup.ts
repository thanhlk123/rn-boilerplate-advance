import {execSync} from 'child_process';

import {getAndroidHome, getRubyVersion} from './common';

(function () {
  execSync('yarn patch-package', {stdio: 'inherit'});

  if (getAndroidHome() !== '') {
    execSync(`echo "sdk.dir=${getAndroidHome()}" > android/local.properties`, {
      stdio: 'inherit',
    });
  }

  //Check if macOS
  if (process.platform === 'darwin') {
    execSync('cd ios && touch tmp.xcconfig');

    console.log(
      '                  🧐🧐🧐🧐🧐 Installing Bundle dependencies!! 🧐🧐🧐🧐🧐',
    );

    execSync('bundle install', {
      stdio: 'inherit',
    });

    console.log('bundle install Done!!✨✨✨✨✨');

    console.log(
      '                  🧐🧐🧐🧐🧐 Installing CocoaPods dependencies!! 🧐🧐🧐🧐🧐',
    );

    execSync('cd ios && pod install', {
      stdio: 'inherit',
    });

    console.log('                      ✨✨✨✨✨ Pod done!!! ✨✨✨✨✨');
  }
})();
