function storage{
    var fname = document.getElementById("fname").nodeValue
    var mname = document.getElementById("mname").nodeValue
    var lname = document.getElementById("lname").nodeValue
    var gend = document.getElementById("gender").Value
    var phonenum = document.getElementById("phone").Value
    var mail = document.getElementById("email").Value
    var addres =; document.getElementById("address").Value
    var fullname = fname + "" + mname + "" + lname

    localStorage.setItem("nam", fullname)
    localStorage.setItem("gen", gend)
    localStorage.setItem("pho", phonenum)
    localStorage.setItem("mai", mail)
    localStorage.setItem("addr", addres)

}


document.getElementById("name").innerHTML = localStorage.setItem("nam", fullname)
document.getElementById("gender").innerHTML = localStorage.setItem("gen", gend)
document.getElementById("phone").innerHTML = localStorage.setItem("pho", phonenum)
document.getElementById("email").innerHTML = localStorage.setItem("mai", mail)
document.getElementById("address").innerHTML = localStorage.setItem("addr", addres)