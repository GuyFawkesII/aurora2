#!/bin/bash

EXPORT_MODE=true
NEXT_PUBLIC_MATOMO_URL=https://analytics.aurorafast.co.uk
NEXT_PUBLIC_MATOMO_SITE_ID=6
NEXT_PUBLIC_CRISP=62b1921c-e285-41ea-9c01-dcdb98c550be
NEXT_PUBLIC_LANGUAGE=es
NEXT_PUBLIC_BACKEND_SERVER=https://br.aurorafast.co.uk/
NEXT_PUBLIC_TAG_MANAGER=GTM-K95L99VL
NEXT_PUBLIC_ANALYTICS=G-1Y2J4XZRZ2
NEXT_PUBLIC_BACKEND_SERVER1=https://channels.voltaindustrie.com/
NEXT_PUBLIC_IS_TRIAL=yes

# Delete the old .env file if it exists
rm -f .env

# Create a new .env file with the specific values
echo "NEXT_PUBLIC_MATOMO_URL=$NEXT_PUBLIC_MATOMO_URL" > .env
echo "NEXT_PUBLIC_MATOMO_SITE_ID=$NEXT_PUBLIC_MATOMO_SITE_ID" >> .env
echo "NEXT_PUBLIC_CRISP=$NEXT_PUBLIC_CRISP" >> .env
echo "NEXT_PUBLIC_LANGUAGE=$NEXT_PUBLIC_LANGUAGE" >> .env
echo "NEXT_PUBLIC_BACKEND_SERVER=$NEXT_PUBLIC_BACKEND_SERVER" >> .env
echo "NEXT_PUBLIC_TAG_MANAGER=$NEXT_PUBLIC_TAG_MANAGER" >> .env
echo "NEXT_PUBLIC_ANALYTICS=$NEXT_PUBLIC_ANALYTICS" >> .env
echo "NEXT_PUBLIC_BACKEND_SERVER1=$NEXT_PUBLIC_BACKEND_SERVER1" >> .env
echo "NEXT_PUBLIC_IS_TRIAL=$NEXT_PUBLIC_IS_TRIAL" >> .env


# Execute your build command (replace this with your actual build command)
npm run build
build_exit_code=$?

if [ $build_exit_code -ne 0 ]; then
  echo "Error: Build process failed with exit code $build_exit_code"
  exit $build_exit_code
fi
zip -r next.zip package.json .next public .babelrc next.config.js nodemon.json .env .eslintrc.json nginx.conf
sshpass -p "94RMsY@xlvwS@vz1" scp next.zip root@49.12.106.222:/var/www/vhosts/aurorafastmega.com/httpdocs

# Use sshpass to execute the command with password input
sshpass -p "94RMsY@xlvwS@vz1" ssh root@49.12.106.222 "rm -rf /var/www/vhosts/aurorafastmega.com/httpdocs/.next"

# Use sshpass to execute the unzip command with password input
sshpass -p "94RMsY@xlvwS@vz1" ssh root@49.12.106.222 "unzip -o /var/www/vhosts/aurorafastmega.com/httpdocs/next.zip -d /var/www/vhosts/aurorafastmega.com/httpdocs"
sshpass -p "94RMsY@xlvwS@vz1" ssh root@49.12.106.222 "touch /var/www/vhosts/aurorafastmega.com/httpdocs/tmp/restart.txt"

# Additional commands can be added here if needed