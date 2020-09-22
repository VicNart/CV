 function valuestorage() {
    var fname = document.getElementById("fname").Value;
    var mname = document.getElementById("mname").Value;
    var lname = document.getElementById("lname").Value;
    var gend = document.getElementById("gender").Value;
    var phonenum = document.getElementById("phone").Value;
    var mail = document.getElementById("email").Value;
    var addres = document.getElementById("address").Value;
    var fullname = fname + "" + mname + "" + lname;

    localStorage.setItem("nam", fullname);
    localStorage.setItem("gen", gend);
    localStorage.setItem("pho", phonenum);
    localStorage.setItem("mai", mail);
    localStorage.setItem("addr", addres);

    return false;

}


