import os

def process_js_files(directory, output_file):
    with open(output_file, 'w') as f:
        for root, dirs, files in os.walk(directory):
            for file in files:
                if file.endswith('.js') and file != 'TripData.js':
                    file_path = os.path.join(root, file)
                    with open(file_path, 'r') as js_file:
                        contents = js_file.read()
                        title = get_file_title(contents)
                        f.write(f'Title of {file}:\n')
                        f.write(title + '\n')
                        f.write(contents + '\n')
                        f.write('-' * 30 + '\n')

def get_file_title(contents):
    # Implement your logic to extract the title from the file contents
    # Replace the placeholder implementation below with your own code
    # This implementation assumes the title is specified in a comment as "// Title: Your Title"
    lines = contents.split('\n')
    for line in lines:
        if line.startswith('//'):
            return line[10:].strip()
    return 'No Title Found'

# Replace 'directory_path' with the path of the directory you want to search
directory_path = './'
output_file = 'content.txt'
process_js_files(directory_path, output_file)
