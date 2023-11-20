import json
import sys

def create_payload(file_path):
    try:
        with open(file_path, 'r') as file:
            code_content = file.read()
            payload = {"code": code_content}
            print(json.dumps(payload))
    except Exception as e:
        print(f"Error creating payload: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python create_payload.py <file_path>", file=sys.stderr)
        sys.exit(1)
    create_payload(sys.argv[1])
