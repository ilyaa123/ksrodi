import { fixedHeader, mobileMenu, scrollHeader } from "./index-modules/header.js";
import { openModal } from "./index-modules/modal.js";
import { openTabs } from "./index-modules/tabs.js";

fixedHeader(document.querySelector('.header'), document.querySelector('.hero'));
scrollHeader(document.querySelectorAll('a[href*="#"]'));
openTabs(document.querySelectorAll('.tabs__item-btn'));

openModal(document.querySelectorAll('.modal__btn'), document.querySelector('.overlay'));

mobileMenu(document.querySelector('.header__mobile-btn'), document.querySelector('.header__mobile'))