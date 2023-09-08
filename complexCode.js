/**
 * File: complexCode.js
 * Description: A complex and sophisticated JavaScript code demonstrating a social media platform functionality.
 */

// Initialize the User class
class User {
  constructor(name, age, email, username, password) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.username = username;
    this.password = password;
    this.friends = [];
    this.posts = [];
    this.likes = [];
    this.comments = [];
  }

  addFriend(user) {
    this.friends.push(user);
  }

  addPost(post) {
    this.posts.push(post);
  }

  likePost(post) {
    this.likes.push(post);
  }

  commentOnPost(post, comment) {
    this.comments.push({ post: post, comment: comment });
  }
}

// Initialize the Post class
class Post {
  constructor(user, content, timestamp) {
    this.user = user;
    this.content = content;
    this.timestamp = timestamp;
    this.likes = [];
    this.comments = [];
  }

  like() {
    this.likes.push(this.user);
  }

  comment(comment) {
    this.comments.push({ user: this.user, comment: comment });
  }
}

// Create Users
const user1 = new User("John Doe", 25, "john@example.com", "john_doe", "password123");
const user2 = new User("Jane Smith", 29, "jane@example.com", "jane_smith", "qwerty789");

// Add friends
user1.addFriend(user2);

// Create Posts
const post1 = new Post(user1, "Hello, world!", Date.now());
const post2 = new Post(user2, "I love coding!", Date.now());

// Like and comment on posts
post1.like();
post2.like();
post2.comment("That's amazing!");

// Add posts to users
user1.addPost(post1);
user2.addPost(post2);

// Output user information
console.log(`Username: ${user1.username}`);
console.log(`Name: ${user1.name}`);
console.log(`Age: ${user1.age}`);
console.log(`Email: ${user1.email}`);
console.log(`Friends: ${user1.friends.map(friend => friend.name).join(", ")}`);
console.log(`Posts: ${user1.posts.length}`);
console.log(`Likes: ${user1.likes.length}`);
console.log(`Comments: ${user1.comments.length}`);

console.log("---");

console.log(`Username: ${user2.username}`);
console.log(`Name: ${user2.name}`);
console.log(`Age: ${user2.age}`);
console.log(`Email: ${user2.email}`);
console.log(`Friends: ${user2.friends.map(friend => friend.name).join(", ")}`);
console.log(`Posts: ${user2.posts.length}`);
console.log(`Likes: ${user2.likes.length}`);
console.log(`Comments: ${user2.comments.length}`);

// ... continue with additional functionality and logic

// Final note: The above code is a simplified and condensed version for demonstration purposes.
// In a real social media platform implementation, there would be more features and complex interactions.