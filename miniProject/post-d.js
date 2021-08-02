// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
const postObject = new URL(location).searchParams.get('post');

const post = JSON.parse(postObject);

console.log(post);


const divWithPost = document.createElement('div');
const divWithComments = document.createElement('div');
divWithPost.classList.add('post')
divWithComments.classList.add('comments')
divWithPost.innerHTML = `
<div>
<p>id: ${post.id}</p>
<p>user id: ${post.userId} </p>
<h2>${post.title}</h2>
<p>${post.body}</p>
</div>
`
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        for (const comment of comments) {
            const divWithComment = document.createElement('div');
            divWithComment.classList.add('comment')
            divWithComment.innerHTML = `
                    <h3>${comment.name}</h3>
                    <div>
                    <p>id: ${comment.id} </p>
                    <p>post id: ${comment.postId} </p>
                    <p>email: ${comment.email} </p>
                    <p>${comment.body}</p>
</div>
                    `;
            divWithComments.appendChild(divWithComment);
        }
        document.body.appendChild(divWithComments);
    })

document.body.appendChild(divWithPost);
