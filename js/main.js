var $ = document.querySelector.bind(document);

/**************************TÍNH DIỆN TÍCH HÌNH CHỮ NHẬT************************** */

/**
 * Bài tập tính DIỆN TÍCH hình chữ nhật
 * Phân tích bài tập
 * - Khối 1: Phân tích dữ input (khách hàng nhập vào).
 *      + Chiều dài hình chữ nhật
 *      + Chiều rộng hình nhữ nhật
 * - Khối 2: Các bước và công thức xử lý vấn đề.
 *      + Bước 1: Tạo biến chứa giá trị chiều dài(a) và chiều 
 *                rộng(b) của hình chữ nhật.
 *      + Bước 2: Tạo biến chứa kết quả
 *      + Bước 3: Viết công thức tính toán theo công thức 
 *                tính diện tích hình chữ nhật (S).
 *                      S = a*b;
 *      + Bước 4: In ra kết quả cho khách hàng
 * - Khối 3: Kết quả mong đợi của khách hàng
 *      + Tính ra được diện tích của hình chữ nhật
 */

var btnTinh = $("#btnTinhDT");
btnTinh.addEventListener("click", function(){
    
    // Bước 1: Tạo biến và lấy giá trị của khách hàng nhập vào
    var chieuDai = parseInt($("#inputDTChieuDai").value);
    var chieuRong = parseInt($("#inputDTChieuRong").value);
    var S = 0; // Chưa biết kết quả thì tạm gắn cho nó giá trị bằng 0
    // Bước 2: Sử dụng công thức tính.
    S = chieuDai * chieuRong;
    // Bước 3: In ra kết quả.
    var thongBao = $("#thongBaoDT");
    thongBao.style.display = "block";
    thongBao.innerHTML = "Diện tích của hình chữ nhật có chiều dài " + chieuDai + ", chiều rộng " + chieuRong + " là: " + S;
});


/**************************TÍNH CHU VI HÌNH CHỮ NHẬT************************** */


/**
 * Bài tập tính CHU VI hình chữ nhật
 * Phân tích bài tập
 * - Khối 1: Phân tích dữ input (khách hàng nhập vào).
 *      + Chiều dài hình chữ nhật
 *      + Chiều rộng hình nhữ nhật
 * - Khối 2: Các bước và công thức xử lý vấn đề.
 *      + Bước 1: Tạo biến chứa giá trị chiều dài(a) và chiều 
 *                rộng(b) của hình chữ nhật.
 *      + Bước 2: Tạo biến chứa kết quả
 *      + Bước 3: Viết công thức tính toán theo công thức 
 *                tính chu vi hình chữ nhật (P).
 *                      P = (a+b)*2;
 *      + Bước 4: In ra kết quả cho khách hàng (tạm thời 
 *                  dùng console.log()).
 * - Khối 3: Kết quả mong đợi của khách hàng
 *      + Tính ra được chu vi của hình chữ nhật
 */

var btnTinhCV = $("#btnTinhCV");
btnTinhCV.addEventListener("click", function(){
    
    // Bước 1: Tạo biến và lấy giá trị của khách hàng nhập vào
    var inputCVChieuDai = parseInt($("#inputCVChieuDai").value);
    var inputCVChieuRong = parseInt($("#inputCVChieuRong").value);
    var P = 0;
    // Bước 2: Sử dụng công thức tính.
    P = (inputCVChieuDai + inputCVChieuRong) * 2;
    // Bước 3: In ra kết quả.
    var thongBaoCV = $("#thongBaoCV");
    thongBaoCV.style.display = "block";
    thongBaoCV.innerHTML = "Chu vi của hình chữ nhật có chiều dài " + inputCVChieuDai + ", chiều rộng " + inputCVChieuRong + " là: " + P;
    
});



/**************************TÍNH TỔNG 2 KÝ SỐ************************** */


/**
 * Bài tập tính tổng 2 ký số nhập vào
 * Phân tích bài tập
 * - Khối 1: Phân tích dữ input (khách hàng nhập vào).
 *      + Khách hàng nhập vào 1 số có 2 chữ số
 * - Khối 2: Các bước và công thức xử lý vấn đề.
 *      + Bước 1: + Tạo biến n chứa số của khách hàng nhập vào.
 *                + Tạo biến chứa số hàng chục của n
 *                + Tạo biến chứa số hàng đơn vị của n
 *                + Tạo biến chứa tổng của số hàng chục và hàng đơn vị
 *      + Bước 2: Gán giá trị cho n
 *      + Bước 2: Tách số hàng chục theo công thức: 
 *                      hangChuc = Math.floor(n%100/10);
 *      + Bước 3: Tách số hàng đơn vị theo công thức:
 *                      hangDonVi = n%10;
 *      + Bước 4: Tính tổng của 2 ký số vừa tách
 *      + Bước 5: In kết quả
 * - Khối 3: Kết quả mong đợi của khách hàng
 *      + Tính ra được tổng của số hàng chục và hàng đơn vị của số khách hàng nhập
 */
var btnTinhNum = $("#btnTinhNum");
btnTinhNum.addEventListener("click", function(){
    
    // Bước 1: Tạo biến và lấy giá trị của khách hàng nhập vào
    var number = parseInt($("#inputNum").value);
    var tong = 0;
    // Bước 2: Tách số
    var hangChuc = Math.floor(number%100/10);
    var hangDonVi = number%10;
    // Bước 3: Sử dụng công thức tính.
    tong = hangChuc + hangDonVi;
    // Bước 3: In ra kết quả.
    var thongBaoCV = $("#thongBaoNum");
    thongBaoCV.style.display = "block";
    thongBaoCV.innerHTML = "Tổng của 2 ký sô:  " + hangChuc + " và  " + hangDonVi + " là: " + tong;
    
});


