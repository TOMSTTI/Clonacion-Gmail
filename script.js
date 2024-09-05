window.addEventListener('load', function() {

    setTimeout(function() {
    
        document.querySelector('.loading-screen').style.display = 'none';
      
        document.querySelector('.content').style.display = 'block';
        document.querySelector('.sidebar').style.display = 'block';
        document.querySelector('.menu-item').style.display = 'block';
                

    }, 3000); 
});



document.getElementById('menu-icon').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const sideBar = document.getElementById('side-bar');
    const mainContent = document.getElementById('main-content');
    const isSidebarHidden = sidebar.classList.toggle('hidden');
    sideBar.classList.toggle('hidden', isSidebarHidden);
    mainContent.style.marginLeft = isSidebarHidden ? '15px' : '250px';
});


document.getElementById('more-btn').addEventListener('click', function() {
    const submenu = document.getElementById('more-submenu');
    submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('categories-btn').addEventListener('click', function() {
    const submenu = document.getElementById('categories-submenu');
    submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
});

function toggleStar(element) {
    element.classList.toggle('starred');
}

document.getElementById('scroll-container').addEventListener('scroll', function() {
    if (this.scrollTop + this.offsetHeight >= this.scrollHeight) {
      this.classList.add('hidden-scroll');
    } else {
      this.classList.remove('hidden-scroll');
    }
  });


  /*asd*/
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.addEventListener('click', () => {
        // Desmarcar todos los tabs
        document.querySelectorAll('.tab-content').forEach(t => {
            t.setAttribute('aria-selected', 'false');
        });

        // Marcar el tab seleccionado
        tab.setAttribute('aria-selected', 'true');
    });
});