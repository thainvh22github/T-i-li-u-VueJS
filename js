jquery:


file js:
class Index {
    constructor(){
        // Đảm bảo jQuery đã sẵn sàng trước khi liên kết sự kiện click
        $(document).ready(() => {
            this.addEventListeners();
        });
    }

    addEventListeners() {
        // Liên kết sự kiện click của button với hàm add
        $("#btnAdd").click(() => {
            alert("Add done");
        });
    }

}

var oIndex = new Index();

file html:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="btnAdd">
        Add
    </button>

    <script src="/lib/jquery-3.7.1.min.js"></script>

    <script src="/js/index.js"></script>
</body>
</html>
