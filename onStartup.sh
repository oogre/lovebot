#ON STARTUP

#START SERVER
echo "[+] Setting environment variables"
export MAIL_URL='smtp://thelovebot@ogre.be:lovebot123@smtp.phpnet.org:8025'

echo "[+] Starting Meteor App!"
meteor

#START APP
echo "[+] Starting Kiosk App!"
/opt/google/chrome/google-chrome --profile-directory=Default --app-id=afhcomalholahplbjhnmahkoekoijban