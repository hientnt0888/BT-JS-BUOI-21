function getEle(ele) {
    return document.querySelector(ele);
}
var dsnv = new DanhSachNV();
var validation = new Validation();

function themNhanVien() {

    var tk = getEle("#tknv").value;
    var ten = getEle("#name").value;
    var email = getEle("#email").value;
    var matKhau = getEle("#password").value;
    var ngayLam = getEle("#datepicker").value;
    var luongCB = getEle("#luongCB").value;
    var chucVu = getEle("#chucvu").value;
    var gioLam = getEle("#gioLam").value;

    var check = true;
    //Check tai khoan
    check &= validation.checkEmpty(tk, 'Ghi tài khoản dô bạn !', 'tbTKNV')
        && validation.checkTK(tk, "Tài khoản không được trùng", "tbTKNV", dsnv.mangNV) && validation.checkNumber(tk, "Tài khoản phải là số từ 4 đến 6 số", "tbTKNV");

    // Check name
    check &= validation.checkEmpty(ten, "Bạn không có tên hả ?", "tbTen") && validation.checkName(ten, "Tên không hợp lệ", "tbTen");
    //Check email
    check &= validation.checkEmpty(email, 'Điền email vào đi !', 'tbEmail') && validation.checkEmail(email, "Email không hợp lệ", "tbEmail");
    //Check password
    check &= validation.checkEmpty(matKhau, "Không điền mật khẩu ren tạo được acc ?", "tbMatKhau") && validation.checkPass(matKhau, "Mật khẩu phải từ 6-10 ký tự, chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt", "tbMatKhau");
    //Check date
    check &= validation.checkEmpty(ngayLam, "Hãy nhập ngày làm !", "tbNgay") && validation.checkDate(ngayLam, "Hãy điền theo định dạng mm/dd/yyyy", "tbNgay");
    //Check tags select
    check &= validation.checkPosition(chucVu, "Hãy chọn chức vụ", "tbChucVu");



    if (check) {
        var nv = new NhanVien(tk, ten, email, matKhau, ngayLam, luongCB, chucVu, gioLam);
        nv.tinhLuong();
        nv.xepLoai();
        dsnv.themNhanVien(nv);
        hienThiDSNV(dsnv.mangNV);
        setLocal();

    }

}
getEle("#btnThemNV").onclick = themNhanVien;


getEle("#btnThem").onclick = resetForm;

//Hiển thị DSNV 

function hienThiDSNV(mangNV) {

    var content = ""
    mangNV.map(function (nv, index) {
        var trELe = `
        <tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.loaiNV}</td>
        <td><button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')
        ">Xoá</button></td>
        <td><button class="btn btn-danger" data-toggle="modal" data-target="#myModal" onclick="xemNhanVien(${nv.taiKhoan})">Xem</button></td>
      
        </tr>`
        content += trELe;
    })
    getEle("#tableDanhSach").innerHTML = content;
    return content;

}

function setLocal() {
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV))
}
function getLocal() {
    if (localStorage.getItem("DSNV") !== null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThiDSNV(dsnv.mangNV);
    }
}
getLocal();
function xemNhanVien(maNV) {
    var nv = dsnv.xemNV(maNV);
    getEle("#btnThemNV").disabled = true;


    getEle("#tknv").value = nv.taiKhoan;
    getEle("#tknv").disabled = true;
    getEle("#name").value = nv.hoTen;
    getEle("#email").value = nv.email;
    getEle("#password").value = nv.matKhau;
    getEle("#datepicker").value = nv.ngayLam;
    getEle("#luongCB").value = nv.luongCB;
    getEle("#chucvu").value = nv.chucVu;
    getEle("#gioLam").value = nv.gioLam;
}

function xoaNhanVien(maXoa) {
    dsnv.xoaNV(maXoa);
    setLocal();
    getLocal();
}



function capNhat() {

    var tk = getEle("#tknv").value;
    var ten = getEle("#name").value;
    var email = getEle("#email").value;
    var matKhau = getEle("#password").value;
    var ngayLam = getEle("#datepicker").value;
    var luongCB = getEle("#luongCB").value;
    var chucVu = getEle("#chucvu").value;
    var gioLam = getEle("#gioLam").value;

    var nvUpdate = new NhanVien(tk, ten, email, matKhau, ngayLam, luongCB, chucVu, gioLam);
    nvUpdate.tinhLuong();
    nvUpdate.xepLoai();
    dsnv.capNhat(tk, nvUpdate);

    hienThiDSNV(dsnv.mangNV);
    setLocal();
    getLocal()
}
getEle("#btnCapNhat").onclick = capNhat;

function resetForm() {
    getEle("#btnThemNV").disabled = false;
    getEle("#formLogIn").reset();
    getEle("#tknv").disabled = false;

}