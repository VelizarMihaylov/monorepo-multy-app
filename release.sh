set -e

green=`tput setaf 2`
packages=(
  base-styles
  button
  )

# build es5 bundle for all packages
echo "${green} **** Building ES5 bundles for all packages ****"
yarn build:es
echo "${green} **** DONE ****"

# Since most packages depend on base-styles
# we need to make sure that those declarations
# will be generated first. If you are adding new
# packages you will need to update the `packages` array

for package in "${packages[@]}"; 
do
 echo "${green} **** Building TypesScript Declarations for "${package}" ****"
 yarn lerna run --scope @fui-components/${package} build:declarations 
 echo "${green} **** DONE ****"
done