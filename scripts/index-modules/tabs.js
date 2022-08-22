export const openTabs = (tabsBtn) => {
    tabsBtn.forEach(button => {
        button.addEventListener('click', () => {
            tabsBtn.forEach(btn => {
                const tabsCont = btn.nextElementSibling;
                btn.classList.remove('tabs__item-btn-active');
                tabsCont.classList.remove('tabs__item-content-active');
            });
            const tabsContent = button.nextElementSibling;
            tabsContent.classList.toggle('tabs__item-content-active');
            button.classList.toggle('tabs__item-btn-active');
        });
    });
}