// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
const userObject = new URL(location).searchParams.get('user');

const user = JSON.parse(userObject);

const divWithUser = document.createElement('div');
const innerDiv = document.createElement('div');
const btnAllPost = document.createElement('button');
const postsDiv = document.createElement('div');
const postDiv = document.createElement('div');

btnAllPost.classList.add('btnPost')
postsDiv.classList.add('posts')
innerDiv.classList.add('post')
innerDiv.innerHTML = `
<h1>${user.username}</h1>
<h2>Personal info</h2>
<div class="info">
<p>id: ${user.id} </p>
<p>name: ${user.name} </p>
<p>username: ${user.username} </p>
<p>email: ${user.email} </p>
<p>phone: ${user.phone} </p>
<p>website: ${user.website}</p>
</div>
<h2>Address</h2>
<div class="info">
<p>city: ${user.address.city} </p>
<p>suite: ${user.address.suite} </p>
<p>street: ${user.address.street} </p>
<p>zipcode: ${user.address.zipcode} </p>
<p>geo: ${user.address.geo.lat} ${user.address.geo.lng}</p>
</div>
<h2>Company</h2>
<div class="info">
<p>name: ${user.company.name}</p>
<p>catch phrase: ${user.company.catchPhrase}</p>
<p>bs: ${user.company.bs}</p>
</div>
`;
btnAllPost.innerText = "Show posts";
btnAllPost.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then((value => value.json()))
        .then(value => {
                postsDiv.innerText = '';
                for (const valueElement of value) {

                    const postsTitleDiv = document.createElement('div');
                    const postsTitleP = document.createElement('p')
                    postsTitleP.innerText = valueElement.title;
                    postsTitleP.classList.add('post-p')
                    const aInfoPost = document.createElement('a')
                    aInfoPost.innerText = "Get more info";
                    aInfoPost.href = `post-details.html?post=${JSON.stringify(valueElement)}`;
                    postsTitleDiv.append(postsTitleP, aInfoPost);
                    postsTitleDiv.classList.add('post-div')
                    postsDiv.append(postsTitleDiv);
                    postDiv.appendChild(postsDiv)
                }
            }
        )
}

divWithUser.append(innerDiv, btnAllPost, postDiv);

document.body.appendChild(divWithUser)
