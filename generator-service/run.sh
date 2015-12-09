npm install .
C_ID=$(cat /proc/self/cgroup | grep "cpu:/" | sed 's/\([0-9]\):cpu:\/docker\///g')
echo $C_ID
node index.js $C_ID
