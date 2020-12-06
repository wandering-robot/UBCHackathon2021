# UBCHackathon2021
## To get started
1. `git clone https://github.com/wandering-robot/UBCHackathon2021.git`
2. `yarn`
* Installs all node packages specified in package.json
* Requires Yarn : https://classic.yarnpkg.com/en/docs/install/#windows-stable
3. Launch Android Emulator from Android Studio
* `ctrl-shift-a`
* type `AVD Manager` then select
* Launch emulator of choice (Google Pixel 4 XL)
4. `npm start` or `expo start`
5. From web GUI, click `Run on Android device/emulator`

## Update local code with remote changes
### On a feature branch
`git pull --rebase`
### On main branch
`git pull`

## Push code to remote 
1. Before making local changes, checkout a new feature branch
`git checkout -b <branchname>`
2. make your changes then prep them for commit
`git add -u`
* if you have new files, you will need to add them manually
`git add <filename>`
3. commit your files with a message
`git commit -m "<message>"`
4. push your files to remote branch
`git push origin <branchname>`
5. When ready to merge files to main, open a pull request on GitHub then add someone as a reviewer and give us a shout 
