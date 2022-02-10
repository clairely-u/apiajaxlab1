const redditPost = fetch ("https://www.reddit.com/r/aww/.json");
const container = document.getElementById('awwContainer');

redditPost
.then(response => response.json())
.then(data => {
    console.log(data.data.children);
    //Manipulate and create HTML elements
    for (let post of data.data.children) {
        let newPost = document.createElement('div');
        let newTitle = document.createElement('h2');
        newTitle.innerText = post.data.title;
        let newImage = new Image();
        newImage.src = post.data.thumbnail;
        let newLink = document.createElement('a');
        newLink.setAttribute('href', "https://www.reddit.com" + post.data.permalink);
        newLink.classList.add('linkdeco');
        newLink.innerText = 'See original post';

        /*
        let newImage = document.createElement("p");
        newImage.src = post.data.thumbnail;
        */
        // You still need to add a thing for the working link here.

        newPost.append(newTitle);
        newPost.append(newImage);
        newPost.append(newLink);
        container.appendChild(newPost);
    }
});