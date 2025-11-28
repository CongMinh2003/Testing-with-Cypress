// Dữ liệu test cho chức năng Search
module.exports = {
  qnuSearch: { keyword: "QNU", expected: "QNU" },                // từ khóa hợp lệ
  blankSearch: { keyword: "", expected: "/" },                   // trường hợp để trống
  invalidSearch: { keyword: "abcdef12345", expected: "No results" }, // từ khóa không tồn tại
  specialCharSearch: { keyword: "@#$%%", expected: "No results" },   // ký tự đặc biệt
  accentSearchVietnamese: { keyword: "Bình Định", expected: "Bình Định" }, // có dấu
  accentSearchNoAccent: { keyword: "Binh Dinh", expected: "Binh Dinh" }   // không dấu
};


