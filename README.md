# Reddit-challenge

<p align='center'>
    <img src='./scr1.png' </img>
</p>

### Technologies 
- Expo CLI
- React-Native
- React-Navigation
- React-native-webview (native WebView is deprecated)
- Typescript
- Jest and Testing Library

### Setup
Assuming you have Node.js LTS release, install Expo with:  
```
npm install --global expo-cli
```
You can start the app on the web, an emulator or your phone with:
```
npm start
```
### Completed User stories:
- Show a list of the posts in the r/pics subreddit
- Each post must show the following data: thumbnail image (if present), title, author, total number of votes (score), number of comments and date of creation
- Once the user taps on a post navigate to the post’s URL in a WebView
- (Aditional) Unit tests
- (Aditional) Date of creation in a relative format (e.g. “1 day ago”)
- (Aditional) Ability to sort the posts list (“top”, “new”, “hot” or “controversial”)

### Design
  For this app only one container component is used (SubredditScreen) to handle the business logic (access to network service, UI state), with the style and UI in charge of presentational components (PostListItem, ErrorScreen, etc).  
  Following this idea two unit tests were added, a snapshot test on the post card to catch errors in style and presentation, and a test on the container component checking the correct response on a working network service call.  
  Finally due to the small scope and requirements packages/libraries were kept to a minimum. 
