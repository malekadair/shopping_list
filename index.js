

function checkItem(){
    $('.shopping-list').on('click', '.shopping-item-toggle', function(e){
        console.log($(this).parents().eq(1).find('span.shopping-item'))

      $(this).closest('li').find('span.shopping-item').toggleClass('shopping-item__checked');
    })
  }

function deleteItem(){
    $('.shopping-list').on('click', '.shopping-item-delete', function(e){
      $(this).closest('li').remove();
    })
  }


function addingShoppingItems(){
      $('#js-shopping-list-form').on('submit', function(e) {
        e.preventDefault();
        let formValue = $('#shopping-list-entry').val();
        let listItem = `<li>
        <span class="shopping-item">${formValue}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
        $('ul.shopping-list').append(listItem)
        $('#shopping-list-entry').val('');
    })
   
}
$(() => {
    checkItem()
    deleteItem()
    addingShoppingItems()
  })