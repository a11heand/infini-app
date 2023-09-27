/*
* Filename: complex_code.js
* Description: Custom implementation of a social media application using JavaScript
*/

// Define User class
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.posts = [];
    this.followers = [];
  }

  createPost(content) {
    const post = new Post(content);
    this.posts.push(post);
  }

  follow(user) {
    this.followers.push(user);
  }
}

// Define Post class
class Post {
  constructor(content) {
    this.content = content;
    this.likes = 0;
    this.comments = [];
  }

  like() {
    this.likes++;
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

// Initialize Users
const user1 = new User("JohnDoe", "john.doe@example.com");
const user2 = new User("JaneSmith", "jane.smith@example.com");

// Create posts
user1.createPost("Hello, World!");
user1.createPost("This is my first post!");
user2.createPost("Nice weather today!");

// Perform actions
user1.follow(user2);
user2.posts[0].like();
user2.posts[0].addComment("Great photo!");

console.log(user1);
console.log(user2);

/*
Output:
User {
  username: 'JohnDoe',
  email: 'john.doe@example.com',
  posts: [
    Post {
      content: 'Hello, World!',
      likes: 0,
      comments: []
    },
    Post {
      content: 'This is my first post!',
      likes: 0,
      comments: []
    }
  ],
  followers: [
    User {
      username: 'JaneSmith',
      email: 'jane.smith@example.com',
      posts: [Array],
      followers: [Array],
      follow: [Function: follow]
    }
  ],
  createPost: [Function: createPost]
}
User {
  username: 'JaneSmith',
  email: 'jane.smith@example.com',
  posts: [
    Post {
      content: 'Nice weather today!',
      likes: 1,
      comments: [Array]
    }
  ],
  followers: [],
  createPost: [Function: createPost]
}
*/