
require 'ostruct'

def config
  config = OpenStruct.new

  config.test_devices = {
    'deviceName' => '00008110-0006488A0CF9801E', #add UDID of device testing -> we will register device in fastfile
  }

  config.appcenter_ios_key = "" #replace appcenter_ios_key to push app to appcenter.
  config.appcenter_ios_owner_name = "" #replace appcenter_ios_key to push app to appcenter.
  config.appcenter_ios_app_name = "" #replace appcenter_ios_key to push app to appcenter.
  config.appcenter_android_key = "" #replace appcenter_ios_key to push app to appcenter.
  config.appcenter_android_owner_name = "" #replace appcenter_ios_key to push app to appcenter.
  config.appcenter_android_app_name = "" #replace appcenter_ios_key to push app to appcenter.
  config.ios_team_id = "" #replace with your team_id
  config.apple_id="" #replace with your apple_id
  config
end
