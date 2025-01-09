export const commands = [
  { cmd: "sudo [command] [argument]", desc: "Run Command as Super User - Use the sudo command to authenticate as an administrator." },
  { cmd: "[command1] | [command2]", desc: "Forward Command Output - Use the | symbol to pipe the command output as an argument to another command." },
  { cmd: "[command] > /dev/null", desc: "Forward Command Output - Prevent the output of the command from showing in the standard output." },
  { cmd: "echo [text]", desc: "Print in Terminal - Print text to standard output with the echo command." },
  { cmd: "history", desc: "Command History - The system keeps a record of the executed commands. See the list of the commands you previously used." },
  { cmd: "history -[number-of-items]", desc: "Command History - Limit the number of displayed history entries." },
  { cmd: "![value]", desc: "Command History - Execute a command by referring to its value in history." },
  { cmd: "!!", desc: "Command History - Execute the last history entry (the previous command)." },
  { cmd: "[command] --help", desc: "Get Help - Adding the --help option displays a summary of the command's functionalities." },
  { cmd: "man [command]", desc: "Get Help - A detailed overview of the command." },
  { cmd: "exit", desc: "Exit the current terminal session." },
  { cmd: "touch [filename]", desc: "Create an empty file." },
  { cmd: "open [filename]", desc: "Open any file on the system." },
  { cmd: "cat [filename]", desc: "View Files - The cat command prints the contents of the file to the standard output." },
  { cmd: "less [filename]", desc: "View Files - Show the file's contents one screen at a time using the less command." },
  { cmd: "head [filename]", desc: "View Files - Print the first ten lines of the file with the head command." },
  { cmd: "head -n [number] [filename]", desc: "View Files - Choose the number of lines head prints by adding the -n option." },
  { cmd: "[text-editor-command] [filename]", desc: "Edit Files - macOS comes with two preinstalled command-line editors, Nano and Vim. Open the file in a command-line text editor by typing: <p><code>nano test.txt</code> simple text editor</p> <p><code>vim test.txt</code> advanced text editor</p>" },
  { cmd: 'echo "[text]" >> [path-to-file]/[filename]', desc: "Append to Files - Use the >> symbols to append content to a text file." },
  { cmd: "cat [filename] >> [path-to-destination-file]/[filename]", desc: "Append to Files - You can also append the contents of an entire file to another file:" },
  { cmd: 'echo "[text]" > [path-to-file]/[filename]', desc: "Overwrite File - Overwrite the contents of a file from the command line by using the > symbol." },
  { cmd: "cat [filename] > [path-to-file]/[filename]", desc: "Overwrite File - If the file does not exist, the system creates it. By using cat, you can replace the entire file contents with another file." },
  { cmd: "cp [path-to-file] [destination-path]", desc: "Copy Files - Use the cp command to copy files in the Mac terminal." },
  { cmd: "cp [filename] [new-filename]", desc: "Copy Files - Create a copy of a file in the same directory." },
  { cmd: "cp [filename] [destination-path]/[new-filename]", desc: "Copy Files - Copy the file to another directory and change the filename." },
  { cmd: 'cp "[spaced filename]" [destination-path]', desc: "Copy Files - If a filename contains spaces, surround it with quotation marks." },
  { cmd: "cp [file1] [file2] [file3] [destination-path]", desc: "Copy Files - Copy multiple files to the same location." },
  { cmd: "cp -i [filename] [destination-path]", desc: "Copy Files - See the warning if completing the operation would overwrite an already existing file." },
  { cmd: "mv [path-to-file] [destination-path]", desc: "Move Files - The mv command moves the file to another location." },
  { cmd: "mv [filename] [new-filename]", desc: "Move Files - Rename a file." },
  { cmd: "mv [filename] [destination-path]/[new-filename]", desc: "Move Files - Move a file and change its name." },
  { cmd: "mv -i [filename] [destination-path]", desc: "Move Files - Receive a warning before overwriting a file." },
  { cmd: "mv *.[extension] [destination-path]", desc: "Moves Files - Move all the files with the same extension at once." },
  { cmd: "rm [filename]", desc: "Delete Files - Use the rm command to delete files from the system." },
  { cmd: "rm -i [filename]", desc: "Delete Files - Add the -i option to receive a deletion confirmation message." },
  { cmd: "rm -f [filename]", desc: "Delete Files - Force remove the file with the -f option." },
  { cmd: "rm [file1] [file2] [file3]", desc: "Delete Files - Remove multiple files at the same time." },
  { cmd: "pwd", desc: "Show Working Directory - Display the name of the current working directory with the pwd command." },
  { cmd: "cd [directory-path]", desc: "Navigate Directories - The cd command helps the directory tree navigation in macOS. If the user does not specify the path, cd opens the home directory." },
  { cmd: "cd ~", desc: "Navigate Directories - Go to the home directory." },
  { cmd: "cd /", desc: "Navigate Directories - The root directory of the drive." },
  { cmd: "cd -", desc: "Navigate Directories - Previously browsed directory." },
  { cmd: "cd ..", desc: "Navigate Directories - Parent directory." },
  { cmd: "cd ../..", desc: "Navigate Directories - The directory two levels above." },
  { cmd: "ls", desc: "List Directories - View the contents of a directory with the ls command." },
  { cmd: "ls -a", desc: "List Directories - See all directories and files, including the ones that are hidden." },
  { cmd: "ls -l", desc: "List Directories - View the list of directories and files with more details, including the file size, ownership, and permissions." },
  { cmd: "ls -S", desc: "List Directories - Sort files and directories by size." },
  { cmd: "ls -C", desc: "List Directories - View the list in multiple columns." },
  { cmd: "ls -la", desc: "List Directories - To see all the files in a detailed list." },
  { cmd: "cp -r [directory] [destination-path]", desc: "Copy Directories - Use the cp command with the -r option to copy directories." },
  { cmd: "ditto [directory] [destination-path]", desc: "Copy Directories - To copy directory contents rather than the directory itself, use the ditto command." },
  { cmd: "mv [directory] [destination-path]", desc: "Move Directories - The mv command moves the directory to another directory. The syntax is the same as with moving files." },
  { cmd: "rm -r [directory]", desc: "Delete Directories - Delete directories with the rm command and the -r option." },
  { cmd: "rm -rf [directory]", desc: "Delete Directories - Add the -f option to force-remove all the files and sub-directories." },
  { cmd: "rmdir", desc: "Removes empty directories" },
  { cmd: "mkdir", desc: "Creates empty directories" },
  { cmd: "du", desc: "List Directory and File Usage: The du command outputs the amount of space utilized by files and subdirectories in the current directory." },
  { cmd: "du -s [file1] [file2]", desc: "List Directory and File Usage: -s provides an entry for specific files:" },
  { cmd: "du -h", desc: "List Directory and File Usage: -h formats the output into a human-readable format:" },
  { cmd: "du -k", desc: "List Directory and File Usage: -k displays memory in kilobytes, -m shows megabytes, and -g shows gigabytes." },
  { cmd: "du -m | sort -nr", desc: "List Directory and File Usage: Display memory in megabytes and pipe that output to the sort command to display the directories and files in descending order according to their size." },
  { cmd: "which", desc: "Searches the PATH variable for files" },
  { cmd: "df -h", desc: "Calculate Space - Display the free disk space of the system." },
  { cmd: "df -H", desc: "Calculate Space - The -h flag shows the values using the powers of 1024. To change the values to the powers of 1000, use the -H flag." },
  { cmd: "ls -l [filename]", desc: "Display Permissions - View the permissions related to a specific file by using the -l option and providing the filename as the argument." },
  { cmd: "ls -ld [directory-path]", desc: "Display Permissions - To view directory permissions, add the -d option." },
  { cmd: "chmod [number] [filename]", desc: "Change Permissions - Change read, write, and execute privileges of a file with the chmod command. <p>The [number] is a three-digit number in which digits represent user, group, and owner permissions. The number is a sum of all the permissions (read, write, and execute) given to the user, group, and owner.</p> <p>The numerical values of the permissions are: <ul><li>read has a value of 4.</li><li>write has a value of 2.</li><li>execute has a value of 1.</li><li>no permission has a value of 0.</li></ul></p>" },
  { cmd: "chmod -R [number] [directory]", desc: "Change Permissions - Use the -R option to change directory permissions." },
  { cmd: "chown [username]:[group] [filename]", desc: "Change Ownership - Change which user owns the file." },
  { cmd: "chown -R [username]:[group] [directory-path]", desc: "Change Ownership - To change directory ownership, add the -R flag." },
  { cmd: "ps -ax", desc: "View Processes - List the currently running processes sorted by PID (Process ID) with the ps command." },
  { cmd: "ps aux", desc: "View Processes - To see more details about each process, including the CPU and memory consumption." },
  { cmd: "top", desc: "View Processes - For a detailed process list that updates in real time, use the top command. By default, top refreshes the view every second." },
  { cmd: "top -s [number-of-seconds]", desc: "View Processes - Set a custom refresh interval." },
  { cmd: "top -o rsize", desc: "View Processes - Adjust the view in top to see the data sorted by memory usage." },
  { cmd: "top -o cpu", desc: "View Processes - To sort the processes by CPU." },
  { cmd: "ps -ax | grep [process-name-or-PID]", desc: "Find Processes - Search for a specific process by piping the output of the ps command to grep." },
  { cmd: "kill [PID]", desc: "Quit Processes - Use the kill command to quit a misbehaving process by entering its PID." },
  { cmd: "killall [process-name]", desc: "Quit Processes - Quit a process by its name with the killall command." },
  { cmd: "ping [hostname-or-IP-address]", desc: "View Network Information - Test if a remote host is reachable on the network with the ping command." },
  { cmd: "arp -a", desc: "View Network Information - Use the arp command to view a list of devices on the local network, with their IP and MAC addresses." },
  { cmd: "traceroute [hostname-or-IP-address]", desc: "View Network Information - View the path of the packets from the machine to the destination with the traceroute command." },
  { cmd: "ifconfig", desc: "View Network Information - Display the connected network adapters with the ifconfig command." },
  { cmd: "ifconfig [network-adapter-name]", desc: "View Network Information - To view a specific adapter, pass its name as an argument to the command." },
  { cmd: "curl -O [URL]/[filename]", desc: "Download Files - The curl command allows data transfers to and from remote servers. Use curl to download a file to your machine by using the -O option and passing the full URL as an argument." },
  { cmd: "ssh [username]@[hostname-or-IP-address]", desc: "Connect via SSH - Use the following syntax to establish an SSH connection with a remote server." },
  { cmd: "ssh-keygen", desc: "Connect via SSH - When connecting to a remote host for the first time, you may need to generate an SSH key." },
  { cmd: "ssh-copy-id -i [path-to-PUB-key] [username]@[hostname-or-IP-address]", desc: "Connect via SSH - After generating the key, copy it to the remote host." },
  { cmd: "printenv", desc: "Display Variables - Display the list of all the variables on the system with the printenv command." },
  { cmd: "echo $[variable]", desc: "Display Variables - Use echo to print the value of a specific variable." },
  { cmd: "export PATH=$PATH:[path-to-executable]", desc: "Export to Path Variable - Add a new binary path to the PATH variable." },
  { cmd: "export [variable-name]=[variable-value]", desc: "Set Variables - Create a new variable by passing its name and value to the export command." },
  { cmd: 'find [directory] -name "[filename]"', desc: "Search - Find a file within a directory." },
  { cmd: 'find testing -name "*.txt"', desc: "Search - Use the wildcard character * to broaden your search." },
  { cmd: 'grep "[text]" [filename]', desc: "Search - Use grep to search for text within a file." },
  { cmd: '[command] | grep "[text]"', desc: "Search - Find text in the command output by piping the output to grep." },
  { cmd: 'grep -rl "[text]" [directory]', desc: "Search - To search for text across the files in a directory." },
  { cmd: "brew", desc: "Homebrew is the default package manager for macOS. It provides Mac with functionalities usually found in Linux package managers, such as APT, RPM, etc. Below is the list of the most common Homebrew operations." },
  { cmd: "brew update", desc: "Update the formulae." },
  { cmd: "brew upgrade", desc: "Upgrade the formulae." },
  { cmd: "brew upgrade [formula]", desc: "Upgrade a specific formula." },
  { cmd: "brew pin [installed-formula]", desc: "Prevent a formula from receiving an update." },
  { cmd: "brew unpin [pinned-formula]", desc: "Remove the pin and allow the formula to update." },
  { cmd: "brew install [formula]", desc: "Install a formula." },
  { cmd: "brew uninstall [formula]", desc: "Remove a formula from the system." },
  { cmd: "brew list --formula", desc: "View Information - Display a list of the formulae currently installed on the system." },
  { cmd: "brew list --cask", desc: "View Information - View a list of the currently installed casks." },
  { cmd: "brew deps [formula]", desc: "View Information - Show dependency packages for a specified formula." },
  { cmd: "brew outdated --formula", desc: "View Information - Display outdated formulae on the system." },
  { cmd: "brew outdated --cask", desc: "View Information - List outdated casks." },
  { cmd: "brew doctor", desc: "Manage Homebrew - Execute the doctor subcommand." },
  { cmd: "brew help", desc: "Manage Homebrew - Access the help resources." },
  { cmd: "brew cleanup", desc: "Manage Homebrew - Clean the system from outdated packages and stale lock files" },
  { cmd: "caffeinate", desc: "System - Keep Mac awake." },
  { cmd: "softwareupdate -l", desc: "System - Check for system updates." },
  { cmd: "sudo softwareupdate -i -a -R", desc: "System - Apply system updates." },
  { cmd: "killall Dock", desc: "System - Reset macOS Dock." },
  { cmd: "defaults write com.apple.dock ResetLaunchPad -bool true; killall DockCopied!", desc: "System - Reset Launchpad." },
  { cmd: "sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder", desc: "System - Flush DNS cache." },
  { cmd: "cd ~/Library/Mobile\\ Documents/com~apple~CloudDocs/", desc: "System - Access iCloud documents." },
  { cmd: "sudo shutdown -r now", desc: "System - Restart Mac." },
  { cmd: "sudo shutdown -h now", desc: "System - Shut down Mac." },
];

export const vimcommands = [
  { cmd: "vi", desc: "Open File - Open a file in Vim." },
  { cmd: "vim" , desc: "Open File - Open a file in Vim." },
  { cmd: "i", desc: "Insert Mode - Enter insert mode before the cursor." },
  { cmd: "esc", desc: "Normal Mode - Return to normal mode." },
  { cmd: ":q", desc: "Quit Vim - Close the file." },
  { cmd: ":q!", desc: "Quit Vim - Close the file without saving changes." },
  { cmd: ":w", desc: "Save File - Write the changes to the file." },
  { cmd: ":wq", desc: "Save and Quit - Write the changes to the file and close it." },
  { cmd: ":wq!", desc: "Save and Quit - Write the changes to the file and close it without saving changes." },
  { cmd: ":x", desc: "Save and Quit - Write the changes to the file and close it." },
  { cmd: ":e [filename]", desc: "Edit File - Open a file for editing." },
  { cmd: ":e!", desc: "Edit File - Discard changes and reload the file." },
  { cmd: ":e! [filename]", desc: "Edit File - Discard changes and reload a specific file." },
  { cmd: ":w [filename]", desc: "Save File - Save the file with a new name." },
  { cmd: ":wq [filename]", desc: "Save and Quit - Save the file with a new name and close it." },
  { cmd: ":q [filename]", desc: "Quit Vim - Close the file." },
  { cmd: ":q! [filename]", desc: "Quit Vim - Close the file without saving changes." },
  { cmd: ":r [filename]", desc: "Read File - Insert the contents of a file into the current file." },
  { cmd: ":r !ls", desc: "Read File - Insert the output of a shell command into the current file." },
  { cmd: ":set number", desc: "Show Line Numbers - Display line numbers." },
  { cmd: ":set nonumber", desc: "Hide Line Numbers - Hide line numbers." },
  { cmd: ":set autoindent", desc: "Auto Indent - Automatically indent new lines." },
  { cmd: ":set noautoindent", desc: "No Auto Indent - Disable automatic indentation." },
  { cmd: ":set list", desc: "Show Special Characters - Display special characters." },
  { cmd: ":set nolist", desc: "Hide Special Characters - Hide special characters." },
  { cmd: ":set ignorecase", desc: "Case Insensitive Search - Ignore case when searching." },
  { cmd: ":set noignorecase", desc: "Case Sensitive Search - Make search case-sensitive." },
  { cmd: ":set hlsearch", desc: "Highlight Search - Highlight search results." },
  { cmd: ":set nohlsearch", desc: "No Highlight Search - Disable search result highlighting." },
  { cmd: ":set incsearch", desc: "Incremental Search - Highlight search results as you type." },
  { cmd: ":set noincsearch", desc: "No Incremental Search - Disable incremental search." },
]