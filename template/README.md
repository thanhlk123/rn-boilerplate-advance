# Template Boilerplate

# Setup

- Setup development environment [React Native CLI](https://reactnative.dev/docs/environment-setup)
- Node version >= 18 (recommended use [fnm](https://github.com/Schniz/fnm))
- We recommended to use [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable) or [bun](https://bun.sh/)
- Ruby version: 2.7.6 (recommended use [rbenv](https://github.com/rbenv/rbenv))

# Importance before commit

>### <strong>You must fix all bug of ESLint </strong>

>### <strong>You must config git Username/Email</strong>

# Command

> <strong>Before run script, you must navigate to your project</strong> :``` cd <your_project_folder> ```

- Install dependencies: ``` yarn ```
- Run Android: ``` yarn android:dev ``` (dev/prod by default)
- Run IOS: ``` yarn ios:dev ``` (dev/prod by default)
- Start server: ``` yarn start ```
- Install library then pods IOS: ``` yarn add <your_library> ```
- Change App Icon
  - Step 1: Add file to appIcon folder
  - Step 2: Copy and pate to splash folder
  - Step 3: Run command: ``` yarn splash ```
  -
- ...

> #### Detail command: Read script of package.json file

## Base config (Now u can config on env)

- Change App name ``` APP_DISPLAY_NAME ``` on ``` env/(.dev/.prod) ```
- Change App id ``` BUNDLE_IDENTIFIER ``` on ``` env/(.dev/.prod) ```
- Change App version ``` VERSION_NAME ``` on ``` env/(.dev/.prod) ```
- Change App build number ``` VERSION_CODE ``` on ``` env/(.dev/.prod) ```
- Change App URL ``` API_URL ``` on ``` env/(.dev/.prod) ```

### Gen app icon and Change app icon by env

- Update app icon file from appicon folder
- Run: ``` yarn app-icon ``` or ``` yarn app-icon:dev ```
  - Android: auto change flavor script
  - IOS: Change ASSETCATALOG_COMPILER_APPICON_NAME to your respective App Icon Assets (in respective env file)

- ### App icon

  - This project use [rn-ml](https://github.com/MasonLe2497/cli-tools) to gen app icon automatically
    - App icon saved in `appicon` folder
    - Get new `png` file with dimension 1024x1024. <b>The file must not include transparent pixel.</b>
    - App icon named: `appicon-<environment_name>.png`. ex: `appicon-demo.pnd`
    - Create new script for gen app icon in `package.json` file. ex:
      - `"app-icon:demo": "npx rn-ml appicon -s appicon/appicon-demo.png -f demo -icn AppIcon-Demo"`
        - `-f demo`: flavor android
        - `AppIcon-Demo`: App icon image assets name for ios. It must be like `ASSETCATALOG_COMPILER_APPICON_NAME` in env file

  # Environment

>### Create new Environment

Ex: New Environment named: Demo

- ## Setup env

  - Create new env file in env folder (.demo)
  - Copy all value from `.dev` to new env file
  - Update value in new env file

- ## Setup Android/IOS

>## This project use [react-native-config](https://github.com/luggit/react-native-config) to switch env
  - You can follow [this link](https://docs.google.com/document/d/1sPg4N7iXEgD_NzbXBRD_SzHPo4p48uJIgG_fC9hK48s/edit)

