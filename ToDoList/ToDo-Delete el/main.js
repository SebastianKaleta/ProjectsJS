const removeTask = (e) => {
    // e.target.parentNode.remove();//usuwanie rodzica 
    // e.target.parentNode.style.textDecoration = "line-through";
    // e.target.remove();


    const index = e.target.dataset.key;
    document.querySelector(`li[data-key="${index}"]`).remove(); //uniwersalny sposób
}

// document.querySelectorAll('li button').forEach(item => item.addEventListener('click', removeTask))
document.querySelectorAll('button').forEach(item => item.addEventListener('click', removeTask))