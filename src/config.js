import fs from 'fs';

export default {
   API_KEY: 'f017342b',
   API_SECRET: 'a985b5ffc326f508',
   APPLICATION_ID: 'a110458a-103b-47d4-b628-e4a59d7b9252',
   PRIVATE_KEY: fs.readFileSync('./secret/private.key', 'utf8'),
   FROM_NUMBER: '12016728668',
   TO_NUMBER: '16504579476',
   TO_NUMBER_2: '14156010194',
   HOST: 'http://eureka-env.us-east-1.elasticbeanstalk.com',
};


