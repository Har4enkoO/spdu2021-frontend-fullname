const button = document.querySelector('.follow');
const counter = document.querySelector('.counter');

const addFollower = () => {
    counter.innerHTML = `${+counter.textContent+1}`;
    button.innerHTML = `Following`;
    button.style.backgroundColor = "green";
};

const deleteFollower = () => {
    counter.innerHTML = `${+counter.textContent-1}`;
    button.innerHTML = `Follow`;
    button.style.backgroundColor = "blue";
}

button.addEventListener('click', function() {
    button.textContent === "Following" ? deleteFollower() : addFollower();   
})