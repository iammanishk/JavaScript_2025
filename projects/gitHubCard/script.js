// declearing html selectors
let profileImage = document.querySelector('#profile-img');
let profileName = document.querySelector('#name');
let userName = document.querySelector('#user-name');
let followers = document.querySelector('#followers');
let following = document.querySelector('#followiings');
let button = document.querySelector('#follow-btn');






// fetching data from GitHub API
const apiURL = 'https://api.github.com/users/iammanishk'

const xhr = new XMLHttpRequest()
xhr.open('GET', apiURL)
console.log(xhr)
xhr.send()

xhr.onreadystatechange = function(){
    // console.log(xhr.readyState);
    if (xhr.readyState === 4){
        const data = JSON.parse(this.responseText);
        console.log(data);

        profileImage.src = data.avatar_url;
        profileName.innerHTML = data.name;
        userName.innerHTML = `<p>@${data.login}</p>`;
        followers.innerHTML = `<p>Followers: ${data.followers}</p>`;
        following.innerHTML = `<p>Following: ${data.following}</p>`;
        button.href = data.html_url;

    }
    
}


// declearing html selectors for hitesh sir
let h_profileImage = document.querySelector('#h-profile-img');
let h_profileName = document.querySelector('#h-name');
let h_userName = document.querySelector('#h-user-name');
let h_followers = document.querySelector('#h-followers');
let h_following = document.querySelector('#h-followiings');
let h_button = document.querySelector('#h-follow-btn');




// fetching data from GitHub API for Hitesh sir
const hApiURL = 'https://api.github.com/users/hiteshchoudhary'

const hitesh = new XMLHttpRequest()
hitesh.open('GET', hApiURL)
console.log(hitesh)
hitesh.send()

hitesh.onreadystatechange = function(){
    // console.log(xhr.readyState);
    if (hitesh.readyState === 4){
        const data = JSON.parse(this.responseText);
        console.log(data);

        h_profileImage.src = data.avatar_url;
        h_profileName.innerHTML = data.name;
        h_userName.innerHTML = `<p>@${data.login}</p>`;
        h_followers.innerHTML = `<p>Followers: ${data.followers}</p>`;
        h_following.innerHTML = `<p>Following: ${data.following}</p>`;
        h_button.href = data.html_url;

    }
    
}
