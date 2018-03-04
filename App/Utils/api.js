let api = {
    getBio(username) {
        username = username.toLowerCase().trim();
        let url = `https://api.github.com/users/${username}`;
        return fetch(url).then((res) => res.json());
    },
    getRepos(username) {
        username = username.toLowerCase().trim();
        let url = `https://api.github.com/users/${username}/repos`;
        return fetch(url).then((res) => res.json());
    },
    getNotes(username) {
        username= username.toLowerCase().trim();
        let url = `https://github-saver-5b3aa.firebaseio.com/${username}.json`;
        return fetch(url).then((res) => res.json());
    },
    addNote(username, note) {
        console.log(username);
        console.log(note);
        username = username.toLowerCase().trim();
        let url = `https://github-saver-5b3aa.firebaseio.com/${username}.json`;
        return fetch(url, {
            method: 'post',
            body: JSON.stringify(note)
        }).then((res) => res.json());
    }
}

export default api