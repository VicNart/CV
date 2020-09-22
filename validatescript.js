function valuestorage() {
    let fname = document.getElementById("fname").Value;
    let mname = document.getElementById("mname").Value;
    let lname = document.getElementById("lname").Value;
    let gend = document.getElementById("gender").Value;
    let phonenum = document.getElementById("phone").Value;
    let mail = document.getElementById("email").Value;
    let addres = document.getElementById("address").Value;
    let fullname = fname + "" + mname + "" + lname;

    localStorage.setItem("nam", fullname);
    localStorage.setItem("gen", gend);
    localStorage.setItem("pho", phonenum);
    localStorage.setItem("mai", mail);
    localStorage.setItem("addr", addres);

    
}



document.getElementById("name").innerHTML = localStorage.getItem("nam", fullname);
document.getElementById("gender").innerHTML = localStorage.getItem("gen", gend);
document.getElementById("phone").innerHTML = localStorage.getItem("pho", phonenum);
document.getElementById("email").innerHTML = localStorage.getItem("mai", mail);
document.getElementById("address").innerHTML = localStorage.getItem("addr", addres);
