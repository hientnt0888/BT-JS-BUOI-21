// Array obj nhân viên
function DanhSachNV() {
    this.mangNV = [];
    this.themNhanVien = function (nv) {
        return this.mangNV.push(nv)
    };
    this.xoaNV = function (maXoa) {
        var iXoa = this.mangNV.findIndex(function (nv) {
            return nv.taiKhoan == maXoa;
        });
        this.mangNV.splice(iXoa, 1);
    }
    this.xemNV = function (maNV) {
        var nvXem = this.mangNV.find(function (nv) {
            return nv.taiKhoan == maNV;
        });
        return nvXem;
    }
    this.capNhat = function (maNV, nvUpdate) {
        var indexNV = this.mangNV.findIndex(function (nv) {
            return nv.taiKhoan == maNV
        });
        if (indexNV > -1) {
            this.mangNV[indexNV] = nvUpdate;
        }
    }
    //Tìm kiếm nhân viên theo xếp loại
    this.findNV = function (keyWord) {
        var mangNVTK = [];
        var removeSpace = keyWord.toLowerCase().replace(/\s/g, "");
        this.mangNV.map(function (nv) {
                    var index = nv.loaiNV.toLowerCase().replace(/\s/g, "").indexOf(removeSpace);
            if (index > -1) {
                mangNVTK.push(nv);
            }
        });
        return mangNVTK;
    }
}