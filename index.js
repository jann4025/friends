function get() {
    fetch("https://frontendautmn2019-15d9.restdb.io/rest/friends", {
            method: "get",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-apikey": "5d887445fd86cb75861e25f4",
                "cache-control": "no-cache"
            }
        })
        .then(e => e.json())
        .then(friends => {
            friends.forEach(addFriend);
        });
    document.querySelector('button').addEventListener('click', post);
}

function addFriend(friend) {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h1").textContent = friend.name;
    copy.querySelector("h4").textContent = friend.email;
    copy.querySelector("p").textContent = friend.age;
    document.querySelector("#app").appendChild(copy);
}

get();

function post() {
    const data = {
        name: "Jannick Holm",
        email: "hi@jannickholm.dk",
        age: 21
    };
    const postData = JSON.stringify(data);
    fetch('https://frontendautmn2019-15d9.restdb.io/rest/friends', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'x-apikey': '5d887445fd86cb75861e25f4',
                'cache-control': 'no-cache'
            },
            body: postData
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            addFriend(data);
        });
}