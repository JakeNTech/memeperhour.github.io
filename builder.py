import os

CWD = os.getcwd()

if __name__ == "__main__":
    print("Generating new HTML Code!")

    # Remove all metadata
    # os.system("exiftool -overwrite_original -recurse -all= *")

    # List Meme Folder contents
    meme_folder_array = os.listdir(os.path.join(CWD, "assets", "img"))
    print(f"Found {len(meme_folder_array)} Memes!")

    # Update new JS file
    with open(os.path.join(CWD, "assets", "javascript.js"),"w") as f:
        f.write("function show_meme(){\n")
        f.write(f"    memes_array = {str(meme_folder_array)}\n")
        f.write("    // select a meme\n")
        f.write("    image_path = memes_array[Math.floor(Math.random()*memes_array.length)]\n")
        f.write("    console.log(image_path)\n")
        f.write("    // change the background to a meme\n")
        f.write("    document.getElementById(\"the_meme\").innerHTML = \"<img class='center-fit' onclick='show_meme()' src='https://jakentech.github.io/memeperhour.github.io/assets/img/\"+image_path+\"'>\";\n")
        f.write("}\n")
        f.write("\n")
        f.write("// Run function once\n")
        f.write("show_meme()\n")
        f.write("//300000 milliseconds = 5 minutes\n")
        f.write("setInterval(show_meme,3600000)")

    # Update Readme.md
    with open(os.path.join(CWD,"README.md"),"w") as f:
        f.write("# Memeperhour.lol\n")
        f.write("The website for a meme per hour!\n")
        f.write(f"There are currently {str(len(meme_folder_array))} in the folder! Yay!\n\n")
        f.write("## Meme List\n")
        for i in range(0,len(meme_folder_array)):
            f.write(f"   - {meme_folder_array[i]}\n")

    print("Exiting...")

