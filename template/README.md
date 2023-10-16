# Template Boilerplate

# Original Repo: 
 - https://github.com/masonle2x2/BoilerplateReactNative
 - Follow this repo to get this template

# Setup

- Setup development environment [React Native CLI](https://reactnative.dev/docs/environment-setup)
- Node version >= 18 (recommended use [fnm](https://github.com/Schniz/fnm))
- We recommended to use [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable) or [bun](https://bun.sh/)
- Ruby version: 2.7.5 (recommended use [rbenv](https://github.com/rbenv/rbenv))

# Importance before commit

>### <strong>You must fix all bug of ESLint </strong>

>### <strong>You must config git Username/Email</strong>

# Command

> <strong>Before run script, you must navigate to your project</strong> :``` cd <your_project_folder> ```

- Install dependencies: ``` yarn ```
- Run Android: ``` yarn android:run:dev ``` (dev/prod by default)
- Run IOS: ``` yarn ios:run:dev ``` (dev/prod by default)
- Start server: ``` yarn start ```
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
- Change App build number ``` VERSION_(ANDROID/IOS)_CODE ``` on ``` env/(.dev/.prod) ```
- Change App URL ``` API_URL ``` on ``` env/(.dev/.prod) ```
- Change Private key to secure data instorage ``` PRIVATE_KEY_STORAGE ``` on ``` env/(.dev/.prod) ```
- Change Provisioning file name ``` PROVISIONING_PROFILE ``` on ``` env/(.dev/.prod) ```
- Change App URL ``` PROVISIONING_PROFILE ``` on ``` env/(.dev/.prod) ```
- Change Config related appcenter info ``` appcenter_android_key ... ``` on ``` fastlane/config.rb ```
- Change appleId, teamId info in ``` ios_team_id/apple_id ``` on ``` fastlane/config.rb ```

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

- ## Setup Android/IOS

>## This project use [react-native-config](https://github.com/luggit/react-native-config) to switch env
  - You can follow [this link](https://docs.google.com/document/d/1sPg4N7iXEgD_NzbXBRD_SzHPo4p48uJIgG_fC9hK48s/edit)


## Caution
  With gooogle play, u must publish .aab first time manually. Then, u can upload aab via fastlane. [fastlane/fastlane#14686](https://github.com/fastlane/fastlane/issues/14686)
# Folder structure
> <strong>Src Folder</strong>
  - This folder is the main container of all the code inside your application.

> <strong>Assets Folder</strong>
  - It contains assets of our project. Fonts, images, icon, ...
  - With images + icon, import file to source folder inside each image/icon folder. Then you must define the name of file in index.ts file

> <strong>Commom folder</strong>
  - Define constants: response status, app slice name, ...
  - Define responsive function (scale function).
  - Define helper function.
  - Define common hook
  - Define regrex validation
  - Define redux helper function
  - ...

> <strong>Library Folder</strong>
  - Define common component of project.
  - Define service related network. You will define endpoint of API here.
  - Setup + custom library: i18n, react-native-mmkv,...

> <strong>Model Folder</strong>   
  - Define model data that we need to store and retrieve later on.

> <strong>Navigation folder</strong>
  - This folder contain navigation configuration. We can setup navigator or tabbar here.

> <strong>Redux Folder</strong>
  - This folder contain reducer, action, type, selector, store, listener
  - This template use Redux toolkit to setup store.
  - If you want to call an api, please check listener folder inside redux folder

> <strong>Screen Folder</strong>
  - Each screen has a folder
  - Structure:
    - screen-kebab-case
      - components
      - index.tsx
      - ...

# Flow to define + call api in this app:
 1. Config API_URL in env file
 2. Add endpoint in library/networking
 3. Create redux + write action
 4. Create listener, inside listener call api

