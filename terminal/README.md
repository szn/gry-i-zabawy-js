## SHORTCUTS

Key/Command | Description
--------------|-------------
`Tab` | Auto-complete files and folder names
`Ctrl + A` | Go to the beginning of the line you are currently typing on
`Ctrl + E` | Go to the end of the line you are currently typing on
`Ctrl + U` | Clear the line before the cursor
`Ctrl + K` | Clear the line after the cursor
`Ctrl + R` | Lets you search through previously used commands
`       ` | Hit enter to confirm
`       ` | Use left/right arrows to change command before running
`       ` | Hit Ctrl + R again to find next matching command
`Command + K` | Clears the Screen
`Ctrl + C` | Kill whatever you are running
`Ctrl + D` | Exit the current shell

## CORE COMMANDS

Key/Command | Description
--------------|-------------
`cd` | Home directory
`cd [folder]` | Change directory
`cd ~` | Home directory, e.g. 'cd ~/folder/'
`cd /` | Root of drive
`ls` | Short listing
`ls -l` | Long listing
`ll` | Alias for ls -lh
`ls -a` | Listing incl. hidden files
`ls -R` | Entire content of folder recursively
`open [file]` | Opens a file
`open .` | Opens the directory

## COMMAND HISTORY

`history n` | Shows the stuff typed - add a number to limit the last n items
`!$` | Last argument used in previous command

## FILE MANAGEMENT

Key/Command | Description
--------------|-------------
`pwd` | Full path to working directory
`..` | Parent/enclosing directory, e.g.
`ls -l ..` | Long listing of parent directory
`cd ../../` | Move 2 levels up
`.` | Current folder
`cat` | Concatenate to screen (print file on screen)
`rm [file]` | Remove a file, e.g. rm [file] [file]
`rm -i [file]` | Remove with confirmation
`rm -r [dir]` | Remove a directory and contents
`rm -f [file]` | Force removal without confirmation
`rm -i [file]` | Will display prompt before
`cp [file] [newfile]` | Copy file to file
`cp [file] [dir]` | Copy file to directory
`mv [file] [new filename]` | Move/Rename, e.g. mv -v [file] [dir]

## DIRECTORY MANAGEMENT

Key/Command | Description
--------------|-------------
`mkdir [dir]` | Create new directory
`mkdir -p [dir]/[dir]` | Create nested directories
`rmdir [dir]` | Remove directory ( only operates on empty directories )
`rm -R [dir]` | Remove directory and contents
 
## HELP

Key/Command | Description
--------------|-------------
`[command] -h` | Offers help
`[command] --help` | Offers help
`[command] help` | Offers help
`man [command]` | Show the help for 'command'
