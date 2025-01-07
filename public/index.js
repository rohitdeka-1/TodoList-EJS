document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.querySelector('ul');
    const form = document.querySelector('form');
    const input = document.querySelector('.new-input');

    function addTodoItem(text) {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox">
            <span>${text}</span>
            <button class="delete-btn">Delete</button>
        `;
        li.style.opacity = '0';
        todoList.appendChild(li);
        setTimeout(() => {
            li.style.transition = 'opacity 0.5s ease';
            li.style.opacity = '1';
        }, 10);
        setupTodoItemListeners(li);
    }

    function setupTodoItemListeners(li) {
        const checkbox = li.querySelector('input[type="checkbox"]');
        const deleteBtn = li.querySelector('.delete-btn');

        checkbox.addEventListener('change', () => {
            li.classList.toggle('strikethrough');
        });

        deleteBtn.addEventListener('click', () => {
            li.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            li.style.opacity = '0';
            li.style.transform = 'translateX(100%)';
            setTimeout(() => {
                li.remove();
            }, 500);
        });
    }

    // Setup existing todo items
    document.querySelectorAll('li').forEach(setupTodoItemListeners);

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (text) {
            addTodoItem(text);
            input.value = '';
        }
    });
});

