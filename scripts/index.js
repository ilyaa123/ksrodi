import { fixedHeader, scrollHeader } from "./index-modules/header.js";
import { openTabs } from "./index-modules/tabs.js";

fixedHeader(document.querySelector('.header'), document.querySelector('.hero'));
scrollHeader(document.querySelectorAll('a[href*="#"]'));
openTabs(document.querySelectorAll('.tabs__item-btn'))