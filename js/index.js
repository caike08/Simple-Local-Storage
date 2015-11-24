/* JAVASCRIPT - LOCAL STORAGE

	MODERNIZR = CHECK IF YOUR BROWSER SUPPORTS HTML5 LOCAL STORAGE
*/

if (Modernizr.localstorage) {

    Index = {

      array: [],

      initialize: function() {

        Index.setBtnClear();
        Index.setBtnSave();
        console.log(localStorage.length);
        if (localStorage.length > 0) {
          Index.verifyHistory();
        }
      },

      verifyHistory: function() {
        console.log("verify history works");
        console.log(localStorage.length);

        if (localStorage) {
          Index.array = JSON.parse(localStorage.getItem("values"));

          console.log("working in if");

          for (var i in Index.array) {
            console.log("working in for");
            var li = document.createElement('li')
            li.innerHTML = Index.array[i];
            document.getElementById("list").appendChild(li);
          }
        }
        console.log('Storaged value: ', JSON.parse(localStorage.getItem("values")));
      },

      setBtnSave: function() {
        console.log("set btn save works");
        var btnSave = document.getElementById("save");
        btnSave.addEventListener("click", Index.storageItem);
      },

      setBtnClear: function() {
        console.log("set btn clear works");
        var btnClear = document.getElementById("clear");
        btnClear.addEventListener("click", Index.clearStorage);
      },

      storageItem: function() {
        console.log("storage item called");
        Index.array.push(Index.getInput());

        localStorage.setItem("values", JSON.stringify(Index.array));

        var li = document.createElement('li')
        li.innerHTML = Index.getInput();
        document.getElementById("list").appendChild(li);

        Index.clearInput();
      },

      clearStorage: function() {
        console.log("clear storage called");
        localStorage.clear();
        window.location = window.location;
      },

      getInput: function() {
        var input = document.getElementById("input");
        return input.value;
      },

      clearInput: function() {
        var input = document.getElementById('input');
        input.value = "";
      }
    };

    Index.initialize();
} else {
  alert("your browser doesn't support html5 storage ):")
}

