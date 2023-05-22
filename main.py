import os
from PIL import Image, ImageDraw, ImageFont


def get_files_in_dir(path):
    """Returns a list of files in a directory"""
    files = []
    for root, _, filenames in os.walk(path):
        for filename in filenames:
            files.append(os.path.join(root, filename))
    return files


def draw_code_screenshot(filename):
    # Open the file and read its contents
    with open(filename, 'r', encoding="utf-8") as file:
        contents = file.readlines()

    # Set the font properties for drawing the text
    font = ImageFont.truetype('arial.ttf', size=16)
    line_height = font.getsize("hg")[1]
    max_chars = max([len(line) for line in contents])
    text_size = (max_chars * font.getsize("hg")[0], len(contents) * line_height)

    # Create a new image for the screenshot
    img = Image.new('RGB', (text_size[0] + 20, text_size[1] + 50), color='white')
    d = ImageDraw.Draw(img)

    # Draw the file name at the top of the image
    d.text((10, 10), os.path.basename(filename), font=font, fill=(0, 0, 0))

    # Draw the line numbers and code on the image
    line_num = 1
    for line in contents:
        # Replace tabs and new lines with spaces
        line = line.replace('\t', '    ').replace('\n', '')
        d.text((15, 40 + (line_height * (line_num - 1))), f"{line_num:>3} | {line}", font=font, fill=(0, 0, 0))
        line_num += 1

    # Save the image to the screenshots directory
    screenshots_dir = os.path.join(os.getcwd(), 'screenshots')
    if not os.path.exists(screenshots_dir):
        os.makedirs(screenshots_dir)

    screenshot_path = os.path.join(screenshots_dir, os.path.basename(filename).replace('.', '_') + '.png')
    img.save(screenshot_path)
    print(f"Screenshot saved to {screenshot_path}")


# if __name__ == '__main__':
#     path = input("Enter the path to the directory: ")
#     sub_dir = input("Enter the name of the sub-directory: ")

#     # Get the files in the sub-directory
#     sub_dir_path = os.path.join(path, sub_dir)
#     files = get_files_in_dir(sub_dir_path)

#     # Print the files and get the number of files to show
#     for i, file in enumerate(files):
#         print(f"{i+1}. {file}")
#     n = int(input(f"Enter the number of files to show (1-{len(files)}): "))

#     # Draw the screenshot for each file and save to the screenshots directory
#     for i in range(n):
#         draw_code_screenshot(files[i])

import os

def find_js_files(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".js"):
                print(file, end="\n")

# Replace "directory_path" with the path to your target directory
directory_path = "./frontend/src"
find_js_files(directory_path)