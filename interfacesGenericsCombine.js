function fetchData(url) {
    return fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (data) { return ({ data: data, status: 200 }); });
}
fetchData("https://jsonplaceholder.typicode.com/users/1")
    .then(function (userResponse) { return console.log(userResponse.data); });
