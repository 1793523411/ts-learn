"use strict";
var TodoModel = /** @class */ (function () {
    function TodoModel() {
        var _this = this;
        this.gid = 0;
        this.add = function () { return _this.gid++; };
        this.remove = function (id) { return void 0; };
    }
    return TodoModel;
}());
console.log(TodoModel);
todoModel = new TodoModel();
// export default todoModel;
