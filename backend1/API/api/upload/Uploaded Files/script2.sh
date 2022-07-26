#!/bin/bash
if [ -z "$host" ]
then
host=`uname -n`
 
fi
 
hote=${host:12:4};
 
#echo ${hote^^};
 
STATE_OK=0
STATE_WARNING=1
STATE_CRITICAL=2
STATE_UNKNOWN=3
 
ls $KYC_ROOT/client/CD01/online|wc
export KYC_ROOT=/opt/application/eme/sironkyc


cmd=`/opt/nagiosagent/current/nagios_plugins/check_oracle --tns $1.FT | grep "^OK" | awk  '{print $5}'`
 
if [ ! -z "$cmd" ] && [ $cmd -ge 0 ] && [ $cmd -lt 1000 ]; then
                   FINAL_STATE="OK"
                   code_retour=$STATE_OK
                   echo "$FINAL_STATE - reply time $cmd msec from ${1}.FT"
                   exit $code_retour
else
                   FINAL_STATE="CRITICAL"
                   code_retour=$STATE_CRITICAL
                   echo "$FINAL_STATE - Check Oracle Listener n'est pas ok, veuillez contacter le support"
                   exit $code_retour
 
fi
 