function submitData(userName, userEmail) {
    fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body:JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    })
    .then(res => res.json())
    .then(function (object) {
    var page = document.querySelector('body')
    const li = document.createElement('li')
    page.append(li)
    const ul = document.createElement('ul')
    ul.innerText = object
    li.appendChild(ul)
    })
    .catch(function (error) {
        console.log(error.message);
    })
}