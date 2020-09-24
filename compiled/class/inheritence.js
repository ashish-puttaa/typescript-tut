"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    /*
       Inhertitence
    */
    var Department = /** @class */ (function () {
        function Department(id, name) {
            this.id = id;
            this.name = name;
            // public readonly id: string;
            // public name: string;
            this.employees = [];
            // this.id = id
            // this.name = name;
        }
        Department.prototype.describe = function () {
            console.log("Department " + this.id + " : " + this.name);
        };
        Department.prototype.addEmployee = function (employee) {
            this.employees.push(employee);
        };
        Department.prototype.printEmployeeInfo = function () {
            console.log('Employees: ', this.employees.length);
            console.log(this.employees);
        };
        return Department;
    }());
    var ITDepartment = /** @class */ (function (_super) {
        __extends(ITDepartment, _super);
        function ITDepartment(id, admins) {
            var _this = _super.call(this, id, 'IT') || this;
            _this.admins = admins;
            return _this;
        }
        return ITDepartment;
    }(Department));
    var itDep = new ITDepartment('111', ['Tez', 'Zet']);
    itDep.describe();
    var AccoutingDepartment = /** @class */ (function (_super) {
        __extends(AccoutingDepartment, _super);
        function AccoutingDepartment(id, reports) {
            var _this = _super.call(this, id, 'Accounting') || this;
            _this.reports = reports;
            return _this;
        }
        AccoutingDepartment.prototype.addEmployee = function (name) {
            if (name === 'Max') {
                return;
            }
            this.employees.push(name);
        };
        AccoutingDepartment.prototype.addReport = function (text) {
            this.reports.push(text);
        };
        AccoutingDepartment.prototype.printReports = function () {
            console.log(this.reports);
        };
        return AccoutingDepartment;
    }(Department));
    var accountingDep = new AccoutingDepartment('AD7', []);
    accountingDep.addReport('Something went wrong...');
    accountingDep.addEmployee('Max');
    accountingDep.addEmployee('Tez');
    accountingDep.printReports();
    accountingDep.printEmployeeInfo();
})();
