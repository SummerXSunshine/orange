class tag extends HTMLElement {
    constructor() {
        super();
        var name = document.createElement('p');
        name.classList.add('name');
        name.innerText = 'User Name';
    }
}

export default tag;