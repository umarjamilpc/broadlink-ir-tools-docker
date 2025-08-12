# THIS IS THE FORK OF keitetran.github.io/BroadlinkIRTools REPO
# NEW TOOL URL HERE
https://keitetran.github.io/BroadlinkIRTools/dist/#/

# Broadlink tools
This tool support for SmartIR  https://github.com/smartHomeHub/SmartIR <br>

## How it work
- Deploy it using docker compose file.
- Docker Image: ghcr.io/umarjamilpc/broadlinkirtools:latest
- Once deployed, Open with URL via : https://192.168.0.0:8080
- Disable ads block on browser. I dont add anymore ads to this site, but adblocker will block connection to your hass :( Sorry for the inconvenience
- This will connect to your hass via webservice
- Enter https address of your home assistant instance. (Only work with https)
- Enter token of your home assistant.
- Select Device.
- and you are ready to go.

## NEED COMMUNITY SUPPORT,
- I am not good at development, and managing github repos.
- I am willing to handover this repo who can manage this and keep the project live.
- Email me at this address: umar-jamil-pc@outlook.com 

## This is  testing version 
- Support create cimate code from Broadlink
- Support create media code
- Support fan code
- Support universal code
- Import and edit your json (not yet)
- Support create climate with Swing (not yet)

# For developer 
```
git clone https://github.com/keitetran/BroadlinkIRTools.git
cd BroadlinkIRTools
npm i
npm run dev
```

Build code and commit
```
npm run build
```
