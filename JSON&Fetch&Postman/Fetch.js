fetch("https://jsonplaceholder.typicode.com/comments")
	.then((response) => {
		return response.json();
	})
	.then((comments) => {
		let html = comments.map((comment) => {
			return `
                <h2>${comment.name}</h2>
                <p>${comment.body}</p>
            `;
		});
		// document.getElementById("comment__box").innerHTML = html.join("");
	})
	.catch(() => {
		console.log("co loi");
	});

var api_posts = "https://jsonplaceholder.typicode.com/posts";
var api_users = "https://jsonplaceholder.typicode.com/users";
fetch(api_posts)
	.then(function (response) {
		return response.json();
		// .json sẽ thực hiện việc JSON.parse giùm
		// JSON -> Javascript types
		// response.json() sẽ là 1 Promise có trạng thái fulfilled(resolve())
		// nên sẽ nhảy vào then phía sau
	})
	.then(function (posts) {
		// Lấy ra các user đã up bài post
		var userIds = posts.map(function (post) {
			return post.userId;
		});
		return fetch(api_users)
			.then(function (response) {
				return response.json(); // Lấy được thông tin users
			})
			.then(function (users) {
				// Lọc qua danh sách users, chỉ lấy những user có up bài
				var listUsersHasPost = users.filter(function (user) {
					return userIds.includes(user.id);
				});
				return {
					users: listUsersHasPost,
					posts: posts,
				};
			});
	})
	.then(function (data) {
		var boxElement = document.getElementById("box");
		var html = "";
		data.users.forEach(function (user) {
			html += `<div><h1>POST OF ${user.name}</h1>`;
			var userPosts = data.posts.filter(function (post) {
				return post.userId == user.id;
			});
			userPosts.forEach(function (userPost) {
				html += `<h2>Title: ${userPost.title}</h2>`;
				html += `<span>Content: ${userPost.body}</span>`;
			});
			html += "</div>";
		});
		boxElement.innerHTML = html;
	});

// Test API tỉnh thành, quận huyện Việt Nam
var cities = "https://provinces.open-api.vn/api/";
var districts = "https://provinces.open-api.vn/api/d/";

function startProvince() {
	getcitiesApi(renderCityApi);
	getDistricts(renderDistrictsApi);
}

startProvince();

function getcitiesApi(callBack) {
	fetch(cities)
		.then(function (response) {
			return response.json();
		})
		.then(callBack);
}

function getDistricts(callBack) {
	fetch(districts)
		.then(function (response) {
			return response.json();
		})
		.then(callBack);
}

function renderCityApi(cities) {
	var listcities = document.querySelector('[name="city"]');
	var opt = '<option selected="true" disabled="true" >Tỉnh thành...</option>';
	var htmls = cities.map((cities) => {
		return `
            <option value="${cities.code}">${cities.name}</option>
        `;
	});
	htmls.join("");
	opt += htmls;
	listcities.innerHTML = opt;
}

function renderDistrictsApi(districts) {
	var onChange = document.querySelector('[name="city"]');
	onChange.addEventListener("change", function (e) {
		var listDistricts = document.querySelector('[name="district"]');
		var result = districts.filter((districts) => {
			return districts.province_code == e.target.value;
		});
		var htmls = result.map((districts) => {
			return `
                <option>${districts.name}</option>
            `;
		});
		listDistricts.innerHTML = htmls.join("");
	});
}

var usersApi = "https://jsonplaceholder.typicode.com/users",
	commentsApi = "https://jsonplaceholder.typicode.com/comments";

fetch(usersApi)
	.then(function (response) {
		return response.json();
	})
	.then(function (users) {
		// Đã lấy ra danh sách user là users
		var userIds = users.map(function (user) {
			return user.id;
		});
		// Dã lấy ra array ID là userIds
		return fetch(commentsApi)
			.then(function (response) {
				return response.json();
			})
			.then(function (comments) {
				// Đã lấy ra danh sách comment là comments
				var comments = comments.filter(function (comment) {
					return userIds.includes(comment.postId);
				});
				return {
					userList: users,
					commentList: comments,
				};
			});
		// Đã tạo object gồm [danh sách user] và [danh sách comments đã lọc(chỉ còn 50/500cmt hợp lệ)]
	})
	.then(function (data) {
		var html = "";
		var commentBlock = document.getElementById("comment-block");
		// Bắt cặp comment nào đi với user nào thông qua id === postId
		data.commentList.forEach(function (comment) {
			var user = data.userList.find(function (user) {
				return user.id === comment.postId;
			});
			html += `<li> 
         <h2> ${user.name} </h2>
         <h4> ${user.email}</h4>
         <p> ${comment.body}
         </li>`;
		});
		commentBlock.innerHTML = html;
	});
