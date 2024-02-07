const navigation = document.getElementById('em_navigation');
const navigationButton = document.getElementById('em_navigation_button');

if (navigationButton) {
  navigationButton.addEventListener('click', () => {
    const classGroups = [
      { element: navigationButton.querySelector('div span:nth-child(1)'), classes: ['rotate-45', '-translate-y-1.5', 'bg-dark', 'bg-white'] },
      { element: navigationButton.querySelector('div span:nth-child(2)'), classes: ['opacity-0', 'bg-dark', 'bg-white'] },
      { element: navigationButton.querySelector('div span:nth-child(3)'), classes: ['-rotate-45', 'translate-y-1.5', 'bg-dark', 'bg-white'] },
      { element: navigation, classes: ['opacity-0', '-z-10', 'pointer-events-none'] },
      { element: document.querySelector('body'), classes: ['overflow-y-hidden'] },
    ];

    classGroups.forEach(({ element, classes }) => {
      if (element) {
        classes.forEach((cls) => {
          element.classList.toggle(cls);
        });
      }
    });
  });
}