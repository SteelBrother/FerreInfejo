document.addEventListener("DOMContentLoaded", function() {
    const mySelect = document.querySelector('.form-select');
    
    if (mySelect) {
        mySelect.addEventListener("change", changeFunction);
    }

    function changeFunction() {
        const idStore = "store_" + mySelect.value;
        const findIdStore = document.getElementById(idStore);
        
        if (findIdStore) {
            const allStores = document.querySelectorAll('.stores-map__main');

            allStores.forEach(function(store) {
                store.style.display = "none";
            });

            findIdStore.style.display = "block";
        }
    }
});
