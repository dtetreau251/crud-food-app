var app = new function() {
  this.el = document.getElementById('categories');

  this.categories = [];

  this.FetchAll = function() {
    var data = '';

    if (this.categories.length > 0) {
      for (i = 0; i < this.categories.length; i++) {
        data += '<tr>';
        data += '<td>'+(i+1)+". " + this.categories[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')"  class="edit-button">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')"  class="delete-button">Delete</button></td>';
        data += '</tr>';
      }
    }

    this.Count(this.categories.length);
    return this.el.innerHTML = data;
  };

  this.Add = function () {
    el = document.querySelector('.add-categories');
    // Get the value
    var category = el.value;

    if(category.indexOf("English") > -1 || category.indexOf("english") > -1 || category.indexOf("ENGLISH") > -1 || category.indexOf("British") > -1 || category.indexOf("BRITISH") > -1 || category.indexOf("british") > -1) {
        alert("Error! This is the worst food ever.");
        return;
    }

    if (category) {
      // Add the new value
      this.categories.push(category.trim());
      // Reset input value
      el.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };

  this.Edit = function (item) {
    var el = document.getElementById('edit-categories');
    // Display value in the field
    el.value = this.categories[item];
    // Display fields
    document.getElementById('edit-box').style.display = 'block';
    self = this;

    document.getElementById('save-edit').onsubmit = function() {
      // Get value
      var category = el.value;

      if (category) {
        // Edit value
        self.categories.splice(item, 1, category.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };

  this.Delete = function (item) {
    // Delete the current row
    this.categories.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };

  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'Categories';

    if (data) {
        if(data ==1){
            name = 'Category';
        }
      el.innerHTML = data + ' ' + name ;
    } 
    else {
      el.innerHTML = 'No ' + name;
    }
  };
  
}

app.FetchAll();

function CloseInput() {
  document.getElementById('edit-box').style.display = 'none';
}