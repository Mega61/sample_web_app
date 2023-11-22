import os

def read_file(file_path):
    """
    Reads the content of a file.

    Args:
        file_path (str): The path to the file to be read.

    Returns:
        str: The content of the file.
    """
    try:
        with open(file_path, 'r') as file:
            return file.read()
    except FileNotFoundError:
        print(f"The file {file_path} was not found.")
        return None
    except IOError as e:
        print(f"An error occurred while reading the file: {e}")
        return None

def process_content(content):
    """
    Processes the content of a file.

    For demonstration, this function simply converts the content to uppercase.

    Args:
        content (str): The content to be processed.

    Returns:
        str: The processed content.
    """
    return content.upper()

def write_file(file_path, content):
    """
    Writes content to a file.

    Args:
        file_path (str): The path to the file where content will be written.
        content (str): The content to be written to the file.
    """
    try:
        with open(file_path, 'w') as file:
            file.write(content)
    except IOError as e:
        print(f"An error occurred while writing to the file: {e}")

def main():
    """
    Main function to orchestrate file reading, processing, and writing.
    """
    input_path = 'input.txt'
    output_path = 'output.txt'

    content = read_file(input_path)
    if content is not None:
        processed_content = process_content(content)
        write_file(output_path, processed_content)
        print(f"Processed content written to {output_path}")

if __name__ == "__main__":
    main()
