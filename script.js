function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('hide');
    sidebar.classList.add('show');

    const items = sidebar.querySelectorAll('li');
    items.forEach((item, index) => {
        item.style.transitionDelay = `${index * 50}ms`;
        item.classList.add('show');
    });

    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
        img.style.transitionDelay = `${index * 50}ms`;
        img.style.opacity = '1';
        img.style.transform = 'translateY(0)';
    });
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const items = sidebar.querySelectorAll('li');

    items.forEach(item => {
        item.style.transitionDelay = '';
        item.classList.remove('show');
    });

    sidebar.classList.remove('show');
    sidebar.classList.add('hide');
}

function setupSidebar() {
    const sidebar = document.querySelector('.sidebar');

    if (!sidebar.classList.contains('show')) {
        sidebar.classList.add('hide');
    }
}

window.onload = setupSidebar;
