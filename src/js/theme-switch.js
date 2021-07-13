import refs from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const setLocalStorage = theme => {
    try {
        localStorage.setItem('theme', theme);
    } catch (error) {
        console.log(error);
    }
};


refs.checkboxSwitch.addEventListener('change', () => {
    let checkboxSwitchChecked = event.target.checked;

    if (checkboxSwitchChecked) {
        // refs.body.classList.add(Theme.DARK);
        setLocalStorage(Theme.DARK);
    } else {
        // refs.body.classList.remove(Theme.DARK);
        setLocalStorage(Theme.LIGHT);
    };

    if (localStorage.getItem('theme') === 'dark-theme') {
        refs.body.classList.add(Theme.DARK);
    } else {
        refs.body.classList.remove(Theme.DARK);
    }
});


