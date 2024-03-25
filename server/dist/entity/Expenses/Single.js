var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
let SingleExpense = class SingleExpense {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], SingleExpense.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], SingleExpense.prototype, "type", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], SingleExpense.prototype, "amount", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], SingleExpense.prototype, "createdBy", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], SingleExpense.prototype, "createdOn", void 0);
SingleExpense = __decorate([
    Entity('SingleExpense')
], SingleExpense);
export { SingleExpense };
