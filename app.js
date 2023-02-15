function buttonElement () {
    const buttonElement = document.querySelector('button');
    buttonElement.addEventListener('click', handleOnClick)
}

function handleOnClick() {
    const userName = document.getElementById("username").value;
    const comment = document.getElementById('comments').value;

    const textbox = showComment(comment);
    const name = showUsername(userName);

    document.getElementById('showUsername').textContent = name
    document.getElementById('showComment').textContent = textbox
}

function showComment(text) {
    return text;
}

function showUsername(name) {
    return name;
}

buttonElement()