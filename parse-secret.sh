while IFS= read -r line; do
  if [[ "$line" != "" ]]; then
    key=$(echo $line | cut -d '=' -f 1)
    value=$(echo $line | cut -d '=' -f 2-)
    export $key="$value"
  fi
done <<< "$1"