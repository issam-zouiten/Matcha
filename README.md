# Matcha
  A dating website - 1337 school (42 network) project.

# Description
  A web app where users can interact with each other.
The user can create his account, and after completing his profile he can search for other users by age, distance, rating, common tags.
With the possibility to like, block or report fake accounts. Two matched users can chat with each other.

# Features
  * Like/unlike, block and report users.
  * Search and filter users.
  * Realtime chat with matched users.
  * Realtime notifications when: a like is received, the user is matched with another one, the users's profile is viewed, a message is received, a matched user unliked.

# Front-end
  * React.js (+hooks)
  * Redux (+ Redux form, Redux-saga)
  * Material-ui

# Back-end
  * Node.js
  * Express.js
  * Socket.io
  * MYSQL

# Prerequisites
  node, npm

# Running the app
```
cd client && yarn install
cd server && yarn install
cd server/database && and sh index.sh #to launch db migration with 500+ users
cd server && npm run devStart
cd client && serve -s build -l [PORT]
```
 # Screen Shot
 
<img width="2557" alt="Screen Shot 2021-03-29 at 4 01 54 PM" src="https://user-images.githubusercontent.com/36717755/112863546-dfe57c00-90ae-11eb-8962-6fdd5b36afd8.png">
<img width="2560" alt="Screen Shot 2021-03-29 at 4 04 27 PM" src="https://user-images.githubusercontent.com/36717755/112863566-e2e06c80-90ae-11eb-80d8-2677b84c921d.png">
<img width="2557" alt="Screen Shot 2021-03-29 at 4 07 18 PM" src="https://user-images.githubusercontent.com/36717755/112863569-e4119980-90ae-11eb-973b-eebd69c18abe.png">
<img width="2557" alt="Screen Shot 2021-03-29 at 4 07 33 PM" src="https://user-images.githubusercontent.com/36717755/112863576-e542c680-90ae-11eb-822b-c2a2e594935a.png">
<img width="2557" alt="Screen Shot 2021-03-29 at 4 11 59 PM" src="https://user-images.githubusercontent.com/36717755/112863585-e83db700-90ae-11eb-952d-233d15327286.png">
<img width="2539" alt="Screen Shot 2021-03-29 at 4 16 16 PM" src="https://user-images.githubusercontent.com/36717755/112863599-eb38a780-90ae-11eb-8dc4-3b5fa4d8ae8e.png">
<img width="2547" alt="Screen Shot 2021-03-29 at 4 18 34 PM" src="https://user-images.githubusercontent.com/36717755/112863618-f1c71f00-90ae-11eb-9409-b0a28d7622b7.png">
<img width="2555" alt="Screen Shot 2021-03-29 at 4 20 10 PM" src="https://user-images.githubusercontent.com/36717755/112863630-f4c20f80-90ae-11eb-9b3d-deb5ea1ffc5f.png">
<img width="2560" alt="Screen Shot 2021-03-29 at 4 45 15 PM" src="https://user-images.githubusercontent.com/36717755/112863633-f55aa600-90ae-11eb-8850-d696d54018b0.png">
