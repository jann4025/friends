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

            friends.forEach(friend => {
                const template = document.querySelector("template").content;
                const copy = template.cloneNode(true);
                copy.querySelector("h1").textContent = friend.name;
                copy.querySelector("h4").textContent = friend.email;
                copy.querySelector("p").textContent = friend.age;
                document.querySelector("#app").appendChild(copy);
            });
        });
}

get();