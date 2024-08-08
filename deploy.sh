echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* portalset@95.163.222.112:/var/www/setinform.ru/

echo "Done!"
