//Class obj nhân viên
function NhanVien(tk, ten, email, matKhau, ngayLam, luongCB, chucVu, gioLam) {
    this.taiKhoan = tk;
    this.hoTen = ten;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.loaiNV = ""
    this.tinhLuong = function () {
        if (this.chucVu == "Sếp") {
            this.tongLuong = this.luongCB * 3
        } else  if (this.chucVu == "Trưởng phòng") {
            this.tongLuong = this.luongCB * 2
        } else  if (this.chucVu = "Nhân viên") {
            this.tongLuong = this.luongCB * 1
        }
      
    }
    this.xepLoai = function () {
        if (this.gioLam >= 192) {
            this.loaiNV = "Xuất sắc"
        } else if (this.gioLam >= 176) {
            this.loaiNV = "Giỏi"
        } else if (this.gioLam >= 160) {
            this.loaiNV = "Khá"
        } else {
            this.loaiNV = "Trung bình"
        } 
    }


}