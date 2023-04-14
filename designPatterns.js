/**
 * Constructor Design Pattern.
 * Đây là một phương thức đặc biệt được sử dụng để khởi tạo các đối tượng mới được tạo sau khi bộ nhớ được cấp phát. 
 */
var newObject = {};

var newObject = Object.create(Object.prototype);

var newObject = newObject();
/**
 * Prototype Pattern
 * Mẫu Prototype Pattern dựa trên sự kế thừa nguyên mẫu, theo đó các đối tượng được tạo ra để hoạt động như nhau cho các đối tượng khác.
 */
var myCar = {
    name: "Ford Escort",
    brake: function () {
        console.log("Stop! I am applying brakes");
    },
    Panic: function () {
        console.log("wait. how do you stop thuis thing?")
    }
}
var yourCar = object.create(myCar);
console.log(yourCar.name);
/**
 *  Module Design Pattern
 *  Các loại bổ trợ khác nhau (cả riêng tư và công khai) được đặt trong module pattern.
 *  Bạn có thể tạo các chức năng hoặc thuộc tính tương tự mà không có xung đột.
 *  Đây là sự linh hoạt trong việc đổi tên các funtion công khai.
 *  Phần khó khăn của phần này là không thể ghi đè các function đã có từ bên ngoài.
 */
function AnimalContainter () {

    const container = [];

    function addAnimal (name) {
        container.push(name);
    }

    return {
        add: addAnimal,
    }
}

const container = AnimalContainter();
container.add('Hen');
/**
 * Singleton Pattern
 * Singleton Pattern là một điều cần thiết chỉ được khởi tạo một lần ví dụ như việc kết nối database.
 * Nó chỉ có thể tạo một phiên bản khi kết nối bị đóng hoặc bạn đảm bảo đóng phiên bản đang mở trước khi mở một phiên bản mới được mở lại.
 * khó khăn trong mô hình này là các đối tượng phụ thuộc bị ẩn không dễ dàng để được chọn cho testing.
 */
function DatabaseConnection() {
    let databaseInstance = null;
    let count = 0;

    function init() {
        console.log(`Opening database #${count + 1}`);
    }

    function createIntance() {
        if (databaseInstance == null) {
            databaseInstance = init();
        }
        return databaseInstance;
    }

    function closeIntance() {
        console.log('closing database');
        databaseInstance = null;
    }

    return {
        open: createIntance,
        close: closeIntance
    }
}

const database = DatabseConnection();
database.open(); //Open database #1
database.open(); //Open database #1
database.open(); //Open database #1
database.close(); //close database

/**
 * Factory Pattern.
 * Nó là một sáng tạo liên quan đến việc tạo ra các đối tượng mà không cần một hàm tạo.
 * Nó cung cấp một giao diện chung để tạo các đối tượng, nơi chúng ta có thể chỉ định loại đối tượng gốc sẽ được tạo 
 * Chúng ta nên sử dụng factory pattern khi thành phần đối tượng được thiết lập có mức độ phức tạp cao và khi 
 * chúng ta muốn tạo các phiên bản khác nhau của đối tượng một cách dễ dàng tùy thuộc vào môi trường.
 */

const ob = {};
ob.new = () => {
    console.log('new');
};
ob.a = 'a';
/**
 * Observer Pattern
 * Observer pattern rất tiện dụng ở một nơi mà các đối tượng giao tiếp với các nhóm đối tượng khác đồng thời.
 * Trong observer pattern không có sự push and pull không cần thiết của các sự kiện giữa các trạng thái,
 * thay vào đó các modules liên quan chỉ sửa đổi trạng thái hiện tại của dữ liệu.
 */
function Observer() {
    this.observerContainer = [];
}
Observer.prototype.subscribe = function (element) {
    this.observerContainer.push(element);
}
Observer.prototype.unsubscribe = function (element) {
    const elementIndex = this.observerContainer.indexOf(element);
    if (elementIndex &gt -1) {
        this.observerContainer.splice(elementIndex, 1);
    }
}
Observer.prototype.notifyAll = function (element) {
    this.observerContainer.forEach(function (observerElement) {
        observerElement(element);
    });
}
/**
 * Command Pattern
 * Command Pattern hoạt động hoặc yêu cầu phương thức vào một đối tượng duy nhất để chúng ta có thể chuyển các lệnh gọi phương thức theo ý mình,
 * cho chúng ta cơ hội để ra lệnh từ bất kỳ thứ gì đang thực thi lệnh và thay vào đó, ủy quyền trách nhiệm cho các đối tượng khác nhau. 
 */
(() => {
    const carManager = {
        addCar: (car) =>{

        },
        removeCar: (car) => {

        }
    };
})();