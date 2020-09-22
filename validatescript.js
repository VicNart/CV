function storage{
    fname; document.getElementById("fname").nodeValue
    mname; document.getElementById("mname").nodeValue
    lname; document.getElementById("lname").nodeValue
    gend; document.getElementById("gender").Value
    phonenum; document.getElementById("phone").Value
    mail; document.getElementById("email").Value
    addres; document.getElementById("address").Value
    fullname; fname + "" + mname + "" + lname

    localStorage.setItem("nam", fullname)
    localStorage.setItem("gen", gend)
    localStorage.setItem("pho", phonenum)
    localStorage.setItem("mai", mail)
    localStorage.setItem("addr", addres)

}
