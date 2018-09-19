var db = document.getElementById('dob')
var ba = document.getElementById('badate')
var fc = document.getElementById('fcdate')
var mc = document.getElementById('mcdate')
var dvi = document.getElementById('dvidate')
var pic = document.getElementById('memberphoto')

if (#{member.dob == undefined}) {
	db.innerHTML = "Date of Birth: "
}

if (#{member.badate == undefined}) {
	badate.innerHTML = ""
}

if (#{member.fcdate == undefined}) {
	fcdate.innerHTML = ""
}

if (#{member.mcdate == undefined}) {
	mcdate.innerHTML = ""
}

if (#{member.dvidate == undefined}) {
	dvidate.innerHTML = ""
}

if (#{member.photo.data == undefined}) {
	pic.src = "/images/members/guitar.jpg"
}