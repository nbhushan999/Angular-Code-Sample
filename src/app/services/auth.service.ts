import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable()
export class AuthService {
  authToken: any;
  token: any;
  baseUrl = environment.test;
  // headers1 = { headers: { Authorization: "Bearer " + this.token } };

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http
      .post(this.baseUrl + "user/login", data)
      .toPromise()
      .then(res => res);
  }

  forgotPassword(data: any) {
    return this.http
      .post(this.baseUrl + "user/forget-password", data)
      .toPromise()
      .then(res => res);
  }

  resetPassword(data: any) {
    return this.http
      .post(this.baseUrl + "user/reset-password", data)
      .toPromise()
  }

  getTeachers() {
    let headers: any = { headers: { Authorization: localStorage.getItem("id_token") } };
    return this.http
      .get(this.baseUrl + "admin/teacher", headers).toPromise().then(res => res);
  }

  addTeacher(data: any) {
    let headers: any = { headers: { Authorization: localStorage.getItem("id_token") } };
    return this.http
      .post(this.baseUrl + "admin/add-teacher", data, headers).toPromise().then(res => res);
  }

  deleteStudent(id: any, data: any) {
    let headers: any = { headers: { Authorization: localStorage.getItem("id_token") } };
    return this.http
      .put(this.baseUrl + "admin/update-student/" + id, data, headers).toPromise().then(res => res);
  }

  deleteSchool(id: any, data: any) {
    let headers: any = { headers: { Authorization: localStorage.getItem("id_token") } };
    return this.http
      .put(this.baseUrl + "super-admin/update-school/" + id, data, headers).toPromise().then(res => res);
  }

  getAdmins() {
    let headers: any = { headers: { Authorization: localStorage.getItem("id_token") } };
    return this.http
      .get(this.baseUrl + "super-admin/admin-list", headers).toPromise().then(res => res);
  }

  addAdmin(data: any) {
    let headers: any = { headers: { Authorization: localStorage.getItem("id_token") } };
    return this.http
      .post(this.baseUrl + "super-admin/add-admin", data, headers).toPromise().then(res => res);
  }

  editAdmin(id: any, data: any) {
    let headers: any = { headers: { Authorization: localStorage.getItem("id_token") } };
    return this.http
      .put(this.baseUrl + "super-admin/update-admin/" + id, data, headers).toPromise().then(res => res);
  }

  deleteAdmin(id: any, data: any) {
    let headers: any = { headers: { Authorization: localStorage.getItem("id_token") } };
    return this.http
      .put(this.baseUrl + "super-admin/update-admin/" + id, data, headers).toPromise().then(res => res);
  }

  getDistrict() {
    let headers: any = { headers: { Authorization: localStorage.getItem("id_token") } };
    return this.http
      .get(this.baseUrl + "admin/school-district", headers).toPromise().then(res => res);
  }

  addDistrict(data: any) {
    let headers: any = { headers: { Authorization: localStorage.getItem("id_token") } };
    return this.http
      .post(this.baseUrl + "admin/add-school-district", data, headers).toPromise().then(res => res);
  }

  editDistrict(id: any, data: any) {
    let headers: any = { headers: { Authorization: localStorage.getItem("id_token") } };
    return this.http
      .put(this.baseUrl + "admin/update-school-district/" + id, data, headers).toPromise().then(res => res);
  }

  deleteDistrict(id: any, data: any) {
    let headers: any = { headers: { Authorization: localStorage.getItem("id_token") } };
    return this.http
      .put(this.baseUrl + "admin/update-schol-district/" + id, data, headers).toPromise().then(res => res);
  }

  getDistrictCalendar() {
    let headers: any = { headers: { Authorization: localStorage.getItem("id_token") } };
    return this.http
      .get(this.baseUrl + "admin/calendar", headers).toPromise().then(res => res);
  }

  addDistrictCalendar(data: any) {
    let headers: any = { headers: { Authorization: localStorage.getItem("id_token") } };
    return this.http
      .post(this.baseUrl + "admin/add-calendar", data, headers).toPromise().then(res => res);
  }

}
