function Validation() {
    //Validation ô nhập trống
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
    this.checkName = function (value, message, spanID) {
        var regex = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;

        if (value.match(regex)) {
            document.getElementById(spanID).style.display = "none"
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block"
        return false;
    }
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
    this.checkNumber = function (value, message, spanID) {
        var regex = /^[0-9]{4,6}$/;
        if (value.match(regex)) {
            document.getElementById(spanID).style.display = "none"
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block"
        return false;
    }
    this.checkEmail = function (value, message, spanID) {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (value.match(regex)) {
            document.getElementById(spanID).style.display = "none"
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block"
        return false;
    }
    this.checkPass = function (value, message, spanID) {
        var regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,10}).*$/;
        if (value.match(regex)) {
            document.getElementById(spanID).style.display = "none"
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block"
        return false;
    }
    this.checkInteger = function (value, message, spanID) {
        var regex = /^-?\d+$/;
        if (value.match(regex)) {
            document.getElementById(spanID).style.display = "none"
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block"
        return false;

    }
    this.checkDate = function (value, message, spanID) {
        var regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
        if (value.match(regex)) {
            document.getElementById(spanID).style.display = "none"
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block"
        return false;
    }
    this.checkPosition = function (value, message, spanID) {
        if (value !== "Chọn chức vụ") {
            document.getElementById(spanID).style.display = "none"
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block"
        return false;
    }
    this.checkWage = function (value, message, spanID) {
        if (value <= 20000000 && value >= 1000000) {
            document.getElementById(spanID).style.display = "none"
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block"
        return false;
    }
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

