const fs = require('fs');

const ENV_YAML_CLOUD_FUNCTION_HANDLE_EXCEL_BALANCES = `
POSTGRES_PASSWORD: ${process.env._POSTGRES_PASSWORD}
POSTGRES_USER: ${process.env._POSTGRES_USER}
POSTGRES_DB: ${process.env._POSTGRES_DB}
DATABASE_HOST: ${process.env._DATABASE_HOST}
GOOGLE_APPLICATION_CREDENTIALS: ${process.env._GOOGLE_APPLICATION_CREDENTIALS}
HOST: ${process.env._HOST}
FIREBASE_API_KEY: ${process.env._FIREBASE_API_KEY}
FIREBASE_AUTH_DOMAIN: ${process.env._FIREBASE_AUTH_DOMAIN}
FIREBASE_DATABASE_URL: ${process.env._FIREBASE_DATABASE_URL}
FIREBASE_PROJECT_ID: ${process.env._FIREBASE_PROJECT_ID}
FIREBASE_STORAGE_BUCKET: ${process.env._FIREBASE_STORAGE_BUCKET}
FIREBASE_MESSAGING_SENDER_ID: '${process.env._FIREBASE_MESSAGING_SENDER_ID}'
FIREBASE_APP_ID: ${process.env._FIREBASE_APP_ID}
FIREBASE_MEASUREMENT_ID: ${process.env._FIREBASE_MEASUREMENT_ID}
FEATURE_UPLOAD_BALANCE_TO_STORAGE: '0'
BALANCES_STORAGE_BUCKET: ${process.env._BALANCES_STORAGE_BUCKET}
BALANCES_STORAGE_DIRECTORY: ${process.env._BALANCES_STORAGE_DIRECTORY}
`;

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
delete packageJson.scripts;
packageJson.main = './functions.js';

fs.writeFileSync('./.env.yaml', ENV_YAML_CLOUD_FUNCTION_HANDLE_EXCEL_BALANCES);
fs.writeFileSync('./dist/package.json', JSON.stringify(packageJson, null, 2));
