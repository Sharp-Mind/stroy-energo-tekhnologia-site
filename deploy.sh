echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* portalset@134.0.116.32:/var/www/setinform.ru/

echo "Done!"