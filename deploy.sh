echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* portalset@95.163.237.10:/var/www/95.163.237.10/

echo "Done!"