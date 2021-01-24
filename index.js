const primaryColor = '#4834d4'
const warningColor = '#f0932b'
const successColor = '#6ab04c'
const dangerColor = '#eb4d4b'

const themeCookieName = 'theme'
const themeDark = 'dark'
const themeLight = 'light'

const body = document.getElementsByTagName('body')[0]

function setCookie(cname, cvalue, exdays) {
  var d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  var expires = "expires="+d.toUTCString()
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

function getCookie(cname) {
  var name = cname + "="
  var ca = document.cookie.split(';')
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ""
}


loadTheme()

function loadTheme() {
	var theme = getCookie(themeCookieName)
	body.classList.add(theme === "" ? themeLight : theme)
}

function switchTheme() {
	if (body.classList.contains(themeLight)) {
		body.classList.remove(themeLight)
		body.classList.add(themeDark)
		setCookie(themeCookieName, themeDark)
	} else {
		body.classList.remove(themeDark)
		body.classList.add(themeLight)
		setCookie(themeCookieName, themeLight)
	}
}
function collapseSidebar() {
	body.classList.toggle('sidebar-expand')
}

window.onclick = function(event) {
	openCloseDropdown(event)
}

function closeAllDropdown() {
	var dropdowns = document.getElementsByClassName('dropdown-expand')
	for (var i = 0; i < dropdowns.length; i++) {
		dropdowns[i].classList.remove('dropdown-expand')
	}
}

function openCloseDropdown(event) {
	if (!event.target.matches('.dropdown-toggle')) {
		// 
		// Close dropdown when click out of dropdown menu
		// 
		closeAllDropdown()
	} else {
		var toggle = event.target.dataset.toggle
		var content = document.getElementById(toggle)
		if (content.classList.contains('dropdown-expand')) {
			closeAllDropdown()
		} else {
			closeAllDropdown()
			content.classList.add('dropdown-expand')
		}
	}
}

//add product on click
$("#addNewProduct").click(function (event) {
   
	let productfromitem =
	  ` 
	  <div class="col-3"></div>
	  <div class="col-6">
		<h1 style="margin-top: 30px; margin-bottom: 30px;"> New Product </h1>
		<form>
		  <div class="form-group">
			<input type="text" class="form-control inputField" id="name" placeholder="Enter Product Name">
			<input type="text" class="form-control inputField" id="discription" placeholder="Discription">
			<input type="text" class="form-control inputField" id="photourl" placeholder="Image url">
			<input type="number" class="form-control inputField" id="quantity" placeholder="Quantity">
			<input type="number" class="form-control inputField" id="price" placeholder="Price">
		  </div>
		  <div class="row">
			<button id="addProduct" type="submit" class="custombutton btn btn-primary col-md-6">Submit</button>
			<button href="index.html" type="calcel" class="btn btn-danger col-md-6">Cancel</button>
		  </div>
		</form>
	  </div>
	  <div class="col-3"></div>
	`
	$("#inputForm").append(productfromitem)


})