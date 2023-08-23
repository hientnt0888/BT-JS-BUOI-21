//check regex
function checkRegex(value, pattern, message, spanID) {
    var regex = pattern;
    if (value.match(regex)) {
        document.getElementById(spanID).style.display = "none"
        return true;
    }
    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block"
    return false;
}


function Validation() {
    //Kiểm tra ô nhập trống
    this.checkEmpty = function (value, message, spanID) {
        if (value.trim() == "") {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block"
            return false;
        } else {
            document.getElementById(spanID).style.display = "none"
            return true;
        }
    }
    //Kiểm tra tài khoản
    this.checkTK = function (value, message, spanID, mangNV) {
        var result = mangNV.some(function (nv) {
            return nv.taiKhoan == value
        })
        if (result) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block"
            return false;
        }
        document.getElementById(spanID).style.display = "none"
        return true;
    }
    //Kiểm tra tên
    this.checkName = function (value, message, spanID) {
        var regex = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        return checkRegex(value, regex, message, spanID);
    }
    //Kiểm tra phải là số từ 4-6 số
    this.checkNumber = function (value, message, spanID) {
        var regex = /^[0-9]{4,6}$/;
        return checkRegex(value, regex, message, spanID);
    }
    //Kiểm tra email
    this.checkEmail = function (value, message, spanID) {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return checkRegex(value, regex, message, spanID);
    }
    //Kiểm tra mật khẩu 
    this.checkPass = function (value, message, spanID) {
        var regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,10}$/;
        return checkRegex(value, regex, message, spanID);
    }
    //Kiểm tra số nguyên
    this.checkInteger = function (value, message, spanID) {
        var regex = /^-?\d+$/;
        return checkRegex(value, regex, message, spanID);
    }
    //Kiểm tra định dạng ngày tháng năm
    this.checkDate = function (value, message, spanID) {
        var regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
        return checkRegex(value, regex, message, spanID);
    }
    //Kiểm tra chức vụ
    this.checkPosition = function (value, message, spanID) {
        if (value !== "Chọn chức vụ") {
            document.getElementById(spanID).style.display = "none"
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block"
        return false;
    }
    //Kiểm tra tiền lương
    this.checkWage = function (value, message, spanID) {
        if (value <= 20000000 && value >= 1000000) {
            document.getElementById(spanID).style.display = "none"
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block"
        return false;
    }
    //Kiểm tra giờ làm 
    this.checkTime = function (value, message, spanID) {
        if (value <= 200 && value >= 80) {
            document.getElementById(spanID).style.display = "none"
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block"
        return false;
    }
}



