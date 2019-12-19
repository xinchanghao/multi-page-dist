set -e

entries="$*"

if [[ -z $entries ]]; then
  entries="all"
fi

echo "Start building: ${entries}"
npx cross-env APP_ENTRIES="${entries}" npm run build
