const posts = [
	{
		name: "Vincent van Gogh",
		username: "vincey1853",
		location: "Zundert, Netherlands",
		avatar: "assets/avatar-vangogh.jpg",
		post: "assets/post-vangogh.jpg",
		comment: "just took a few mushrooms lol",
		likes: 21,
	},
	{
		name: "Gustave Courbet",
		username: "gus1819",
		location: "Ornans, France",
		avatar: "assets/avatar-courbet.jpg",
		post: "assets/post-courbet.jpg",
		comment: "i'm feelin a bit stressed tbh",
		likes: 4,
	},
	{
		name: "Joseph Ducreux",
		username: "jd1735",
		location: "Paris, France",
		avatar: "assets/avatar-ducreux.jpg",
		post: "assets/post-ducreux.jpg",
		comment:
			"gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
		likes: 152,
	},
];

let main = document.querySelector("main");

for (let i = 0; i < posts.length; i++) {
	let id = posts[i];
	let name = console.log(id);
	console.log(id.name);
	console.log(id.username);
	console.log(id.location);
	main.innerHTML += `			<section class="painter">
    <div class="container">
        <div class="painter__Id">
            <img
                class="avatar"
                src="${id.avatar}"
                alt="avatar-vangogh"
            />
            <div class="painter__Id--text">
                <h1>${id.name}</h1>
                <p>${id.location}</p>
            </div>
        </div>
        <img
            class="post-Picture"
            src="${id.post}"
            alt="Van Gogh Paint"
        />
    </div>
    <div class="icons">
        <img
            class="heart"
            src="./assets/icon-heart.png"
            alt="heart"
        />
        <input type="checkbox" />
        <i class="fa-solid fa-heart"></i>
        <img src="./assets/icon-comment.png" alt="comment" />
        <img src="./assets/icon-dm.png" alt="dm" />
    </div>
    <p class="like__counter">${id.likes} likes</p>
    <p class="comment">
        <span class="userId">${id.username}</span> ${id.comment}
    </p>
`;
	//console.log(posts[i].name);
	//console.log(posts[i].username);
}
