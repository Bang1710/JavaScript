let users = [
    {
        id: 1,
        name: 'Van Bang'
    },
    {
        id: 2,
        name: "Son Nguyen"
    },
    {
        id: 3,
        name: "Do Vy"
    },
    {
        id: 4,
        name: "Thanh Xuan"
    },
    {
        id: 5,
        name: "Thanh Dat"
    }
]

let comments = [
    {
        id: 1,
        userId: 1,
        content: 'Chieu di chs hem'
    },
    {
        id: 2,
        userId: 2,
        content: 'Ok, hen 5h chieu'
    },
    {
        id: 3,
        userId: 1,
        content: 'Nho dung hen nhe'
    }
]

function getComment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(comments)
        }, 1000)
    })
}

function getUserById(getUserId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let result = users.filter((user) => {
                return getUserId.includes(user.id)
            })
            resolve(result);
        }, 1000)
    })
}

getComment()
    .then((comment) => {
        let user_Id = comment.map((commentElement) => {
            return commentElement.userId
        })
        return getUserById(user_Id)
            .then((userAfterFilter) => {
                return {
                    userName: userAfterFilter,
                    commentName: comment
                }
            })
    })
    .then((data) => {
        let html ='';
        let commentHTML = document.getElementById('comment__box')
        data.commentName.forEach((comment) => {
            let user = data.userName.find((user) => {
                return user.id === comment.userId
            });
            html += `<li>${user.name}: ${comment.content}</li>`
        })
        commentHTML.innerHTML = html;
    });
