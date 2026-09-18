// 1. Get list of users with dynamic count
https://api.github.com/users?per_page=${count}

// 2. Get details of a specific user (example: taylortotwell)
https://api.github.com/users/taylortotwell

// 3. Get users list after a specific user id with pagination
https://api.github.com/users?since=6000&per_page=20
