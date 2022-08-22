export const openTabs = (tabsBtn) => {
    tabsBtn.forEach(button => {
        button.addEventListener('click', () => {
                const tabsContent = button.nextElementSibling;
                tabsContent.classList.toggle('tabs__item-content-active');
                button.classList.toggle('tabs__item-btn-active');
        });
    });
}