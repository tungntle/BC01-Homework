/*Bài 1: Tính tiền lương nhân viên
    Input: số ngày công, tiền lương mỗi ngày công
    Process: 
    - Xử lý sự kiện tại nút tính tiền
    - Lấy số ngày công từ người dùng
    - Tính tổng tiền lương = số ngày công * tiền lương mỗi ngày công
    Output: tổng tiền lương
*/
document.getElementById("tinh-tien-luong").onclick = function() {
    const TIENCONG = 100000
    var soNgayCong = parseInt(document.getElementById("so-ngay-cong").value)
    var tongTienLuong = soNgayCong * TIENCONG
    document.getElementById("tong-tien-luong").innerHTML = tongTienLuong

    document.getElementById("so-ngay-cong").value = ""
    document.getElementById("so-ngay-cong").focus() 
}

/*Bài 2: Tính trung bình 5 số thực
    Input: số thực 1, số thực 2, số thực 3, số thực 4, số thực 5
    Process: 
    - Xử lý sự kiện tại nút tính trung bình
    - Lấy giá trị input từ người dùng (số thực 1st, số thực 2nd, số thực 3rd, số thực 4th, số thực 5th)
    - Tính trung bình = số thực 1st + số thực 2nd + số thực 3rd + số thực 4th + số thực 5th
    Output: trung bình 5 số thực
*/
document.getElementById("nhap-so-thuc").onclick = function() {
    var so1 = parseFloat(document.getElementById("so-thuc-01").value)
    var so2 = parseFloat(document.getElementById("so-thuc-02").value)
    var so3 = parseFloat(document.getElementById("so-thuc-03").value)
    var so4 = parseFloat(document.getElementById("so-thuc-04").value)
    var so5 = parseFloat(document.getElementById("so-thuc-05").value)
    var tongSoThuc = (so1 + so2 + so3 + so4 + so5) / 5
    tongSoThuc = tongSoThuc.toFixed(2)

    document.getElementById("trung-binh").innerHTML = tongSoThuc

    document.getElementById("so-thuc-01").value = ""
    document.getElementById("so-thuc-02").value = ""
    document.getElementById("so-thuc-03").value = ""
    document.getElementById("so-thuc-04").value = ""
    document.getElementById("so-thuc-05").value = ""
    document.getElementById("so-thuc-01").focus()
}

/*Bài 3: Quy đổi USD
    Input: số USD muốn đổi
    Process: 
    - Xử lý sự kiện tại nút tính tiền 
    - Lấy số tiền USD từ người dùng
    - Tính số tiền VNĐ = số tiền USD * 23.500
    Output: số tiền VNĐ
*/
document.getElementById("tinh-tien-vnd").onclick = function() {
    const TIENQUYDOI = 23500
    var soTienUSD = parseInt(document.getElementById("so-usd").value)
    var soTienVND = soTienUSD * TIENQUYDOI
    document.getElementById("tong-tien-vnd").innerHTML = soTienVND

    document.getElementById("so-usd").value = ""
    document.getElementById("so-usd").focus()
}

/* Bài 4: Tính chu vi và diện tích hình chữ nhật 
    Input: chiều dài, chiều rộng
    Process: 
    - Xử lý sự kiện tại nút tính toán
    - Lấy chiều dài và chiều rộng từ người dùng
    - Tính chu vi = (dài + rộng) * 2
    - Tính diện tích = dài * rộng
    Output: số tiền VNĐ
*/
document.getElementById("tinh-chuvi-dientich").onclick = function() {
    var chieuDai = parseInt(document.getElementById("chieu-dai").value)
    var chieuRong = parseInt(document.getElementById("chieu-rong").value)
    var chuVi = (chieuDai + chieuRong) * 2
    var dienTich = chieuDai * chieuRong
    document.getElementById("chu-vi").innerHTML = chuVi
    document.getElementById("dien-tich").innerHTML = dienTich

    document.getElementById("chieu-dai").value = ""
    document.getElementById("chieu-rong").value = ""
    document.getElementById("chieu-dai").focus()
}

/* Bài 5: Tính tổng 2 ký số 
    Input: số nguyên có 2 chữ số
    Process: 
    - Xử lý sự kiện tại nút tính tổng
    - Lấy số nguyên có 2 chữ số từ người dùng
        - Chia dư cho 10 để lấy phần đơn vị
        - Tiếp tục chia dư cho 10 để lấy phần chục
        - Tính tổng 2 số
    Output: tổng của 2 số
*/
document.getElementById("tinh-toan").onclick = function() {
    var soNguyen = parseInt(document.getElementById("so-nguyen").value)
    var donVi = soNguyen % 10
    var hangChuc = Math.floor(soNguyen / 10)
    var tongSoNguyen = donVi + hangChuc
    document.getElementById("tong-so-nguyen").innerHTML = tongSoNguyen
}
    