'use strict';
import * as baseFunction from './modules/functions.js';
import './vendors/vendors.js';


// Проверка поддержки webP
baseFunction.testWebP();

window.addEventListener('load', (e) => {
    document.body.style.opacity = 1;
});

document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.modal-close')) {
        target.closest('.modal.show')?.classList.remove('show');
    }
    if (target.closest('.modal') && !target.closest('.modal-content')) {
        target.closest('.modal.show')?.classList.remove('show');
    }
})
