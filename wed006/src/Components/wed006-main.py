import os
import re

def rename_files(directory):
    for filename in os.listdir(directory):
        if os.path.isfile(os.path.join(directory, filename)) and not filename.startswith("wed006-"):
            new_filename = f"wed006-{filename}"
            os.rename(os.path.join(directory, filename), os.path.join(directory, new_filename))
            update_references(directory, filename, new_filename)
            print(f"Renamed: {filename} -> {new_filename}")

def update_references(directory, old_name, new_name):
    pattern = re.escape(old_name)
    for filename in os.listdir(directory):
        if filename.endswith(".py") and filename != __file__:
            filepath = os.path.join(directory, filename)
            with open(filepath, "r", encoding="utf-8") as file:
                content = file.read()
            
            updated_content = re.sub(pattern, new_name, content)
            
            if content != updated_content:
                with open(filepath, "w", encoding="utf-8") as file:
                    file.write(updated_content)
                print(f"Updated references in: {filename}")

if __name__ == "__main__":
    directory = os.getcwd()  # Change this to your target directory if needed
    rename_files(directory)
