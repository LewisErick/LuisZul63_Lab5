function watchForm() {
    $("#addItemButton").on('click', function(event) {
        event.preventDefault();

        let textValue = $("#inputText").val();
        $("#shoppingList").append(
            `
            <div class="shoppingListItemDiv">
                <li class="shoppingListItem">
                    <span class="itemText">${textValue}</span><br>
                    <button type="submit" class="checkButton">
                        check
                    </button><br>
                    <button type="submit" class="deleteButton">
                        delete
                    </button>
                </li>
            <div>
            `
        );
    });

    $("#shoppingList").on('click', '.shoppingListItem .checkButton', function(event) {
        event.preventDefault();
        $(this).parent().find(".itemText").toggleClass("strike");
    });

    $("#shoppingList").on('click', '.shoppingListItem .deleteButton', function(event) {
        event.preventDefault();
        $(this).parent().remove();
    });
}

watchForm();