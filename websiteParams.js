const analytics = {
    aurorafastmega : {
        tag : "GTM-K95L99VL",
        analytics : "G-1Y2J4XZRZ2",
        transfer : "scp /root/aurora/next.zip root@49.12.106.222:/var/www/vhosts/aurorafastmega.com/httpdocs",
        id : 6
    },
    iptvaurora : {
            tag : "GTM-NGH5DKFP",
            analytics : "G-7V4Q2R7VPJ",
            transfer : "scp /root/aurora/next.zip root@49.12.106.222:/var/www/vhosts/iptvaurora.com/httpdocs",
            id : 7
    },
    aurorarapido: {
            tag : "GTM-53H5FP2Q",
            analytics : "G-2Q4RBD6K36",
            id : 8,
            transfer : "scp /root/aurora/next.zip root@49.12.106.222:/var/www/vhosts/aurorarapido.com/httpdocs",
    },
    aurorafastcouk: {
            tag : "GTM-WXDDVF7",
            analytics "G-W0Q4ZVBHEY",
            id : 1,
            transfer : "scp /root/aurora/next.zip root@49.12.106.222:/var/www/vhosts/gallant-moore.49-12-106-222.plesk.page/aurorafast.co.uk",
    }
}
const credentials = {
    plesk : "94RMsY@xlvwS@vz1",
    matomo : "BNa8orZYXxo1^Agf"
}
const commands = {
    zip : "zip -r next.zip package.json .next public .babelrc next.config.js nodemon.json .env .eslintrc.json nginx.conf",
    transfer : "scp /root/aurora/next.zip root@49.12.106.222:/var/www/vhosts/iptvaurora.com/httpdocs"
}