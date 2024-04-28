document.addEventListener("DOMContentLoaded", function () {
    var addItemBtn = document.getElementById("addItemBtn");
    var listItemsContainer = document.getElementById("listItemsContainer");

    addItemBtn.addEventListener("click", function () {
        var selectedItem = document.getElementById('item').value;
        var quantity = document.getElementById('quantity').value;

        var listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'lh-sm');

        var itemNameDiv = document.createElement('div');
        var itemName = document.createElement('h6');
        itemName.classList.add('my-0');
        itemName.textContent = selectedItem;
        itemNameDiv.appendChild(itemName);

        var quantitySpan = document.createElement('span');
        quantitySpan.classList.add('text-body-secondary');
        quantitySpan.textContent = quantity;

        var closeBtn = document.createElement('button');
        closeBtn.classList.add('btn-close');
        closeBtn.setAttribute('aria-label', 'Close');

        listItem.appendChild(itemNameDiv);
        listItem.appendChild(quantitySpan);
        listItem.appendChild(closeBtn);

        listItemsContainer.querySelector('ul').appendChild(listItem);
    });

    listItemsContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-close")) {
            event.target.closest('li').remove();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var submitBtn = document.getElementById('submitListItem');
    var nameInput = document.getElementById('name');
    var phoneInput = document.getElementById('phone');
    var modalBody = document.getElementById('modalBody');

    var popover = new bootstrap.Popover(document.getElementById('addItemBtn'), {
        toggle: 'popover',
        placement: 'right',
        container: 'body',
        content: function () {
            return "Please add request item to list item!";
        }
    });

    submitBtn.addEventListener('click', function (event) {
        event.preventDefault();

        if (!nameInput.value || !phoneInput.value) {
            nameInput.classList.add('is-invalid');
            phoneInput.classList.add('is-invalid');
        } else {
            nameInput.classList.remove('is-invalid');
            phoneInput.classList.remove('is-invalid');

            var itemsData = collectItemListData();

            if (itemsData.length > 1) {
                var requestData = `Dear ${nameInput.value}, you have requested the following items:<br><ul>`;
                for (var i = 1; i < itemsData.length; i++) {
                    requestData += `<li>${itemsData[i].name} - Quantity: ${itemsData[i].quantity}</li>`;
                }
                requestData += '</ul>';

                modalBody.innerHTML = requestData;

                var guestModal = new bootstrap.Modal(document.getElementById('submitModal'));
                guestModal.show();

                popover.hide();

                console.log(itemsData);
            } else {
                var selectedItem = document.getElementById('item');
                var quantity = document.getElementById('quantity');

                selectedItem.classList.add('is-invalid');
                quantity.classList.add('is-invalid');

                popover.show();
            }
        }
    });

    function collectItemListData() {
        var itemList = document.querySelectorAll('.list-group-item');
        var itemsData = [];

        itemList.forEach(function (item) {
            var itemName = item.querySelector('h6').textContent;
            var quantity = item.querySelector('.text-body-secondary').textContent;

            itemsData.push({ name: itemName, quantity: quantity });
        });

        return itemsData;
    }
});


// LOGIN PAGE
const loginBtn = document.getElementById("login");
const signinBtn = document.getElementById("sigin");

loginBtn.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;
    if (parent) {
        Array.from(parent.classList).find((element) => {
            if (element !== "slide-up") {
                parent.classList.add("slide-up");
            } else {
                if (signinBtn && signinBtn.parentNode) {
                    signinBtn.parentNode.classList.add("slide-up");
                }
                parent.classList.remove("slide-up");
            }
        });
    }
});

signinBtn.addEventListener("click", (e) => {
    let parent = e.target.parentNode;
    if (parent) {
        Array.from(parent.classList).find((element) => {
            if (element !== "slide-up") {
                parent.classList.add("slide-up");
            } else {
                if (loginBtn && loginBtn.parentNode && loginBtn.parentNode.parentNode) {
                    loginBtn.parentNode.parentNode.classList.add("slide-up");
                }
                parent.classList.remove("slide-up");
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('signGuest').addEventListener('click', function (event) {
        event.preventDefault();

        var guestModal = new bootstrap.Modal(document.getElementById('guestModal'));

        guestModal.show();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('guestNIK').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            var nikValue = this.value.trim();

            var nikList = ['123456', '789012', '345678'];

            if (nikList.includes(nikValue)) {
                console.log('NIK cocok:', nikValue);
            } else {
                console.log('NIK tidak cocok:', nikValue);
            }
        }
    });

    document.getElementById('enterGuestBtn').addEventListener('click', function () {
        var nikValue = document.getElementById('guestNIK').value.trim();

        var nikList = ['123456', '789012', '345678'];

        if (nikList.includes(nikValue)) {
            var guestNIKInput = document.getElementById('guestNIK');
            var popover = new bootstrap.Popover(guestNIKInput, {
                container: 'body',
                placement: 'top',
                title: 'Succes!',
                content: 'Welcome Employe'
            });
            popover.show();
            setTimeout(function () {
                window.location.href = 'index.html';
            }, 500);
        } else {
            document.getElementById('guestNIK').value = '';

            var guestNIKInput = document.getElementById('guestNIK');
            var popover = new bootstrap.Popover(guestNIKInput, {
                container: 'body',
                placement: 'top',
                title: 'Alert!',
                content: 'NIK not found'
            });
            popover.show();
        }
    });
});
