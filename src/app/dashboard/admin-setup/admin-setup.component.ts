import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
declare let $: any;

@Component({
  selector: 'app-admin-setup',
  templateUrl: './admin-setup.component.html',
  styleUrls: ['./admin-setup.component.scss']
})
export class AdminSetupComponent implements OnInit {
  adminList: any;
  adminListing = true;
  editAdminBtn = false;
  adminId: any;
  email: any;
  password: any;
  firstName: any;
  lastName: any;
  middleName: any;
  mailingAddress: any;
  mailingCity: any;
  mailingState: any;
  mailingZip: any;
  phoneNumber: any;
  countryCode: any;
  imageUrl: any;
  district: any;
  schoolName: any;
  editDistrict: any;
  addEditDistrictCalendar: any;
  addEditSchoolCalendar: any;
  addEditTeacher: any;
  addEditStudent: any;
  userName: any;

  constructor(private router: Router, private authService: AuthService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.getAdmins();
    this.userName = localStorage.getItem("userName");
  }

  getAdmins() {
    this.spinner.show();
    this.authService.getAdmins().then((res: any) => {
      console.log("res__________", res);
      this.adminList = res['data'];
      this.spinner.hide();
      console.log("admin list___________", this.adminList);
    });
  }

  editAdminData(data: any) {
    console.log(data);
    this.editAdminBtn = true;
    console.log("edit admin", this.editAdminBtn);
    this.adminId = data._id;
    this.email = data.email;
    this.password = data.password;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.middleName = data.middleName;
    this.mailingAddress = data.mailingAddress;
    this.mailingCity = data.mailingCity;
    this.mailingState = data.mailingState;
    this.mailingZip = data.mailingZip;
    this.phoneNumber = data.phoneNumber;
    this.countryCode = data.countryCode;
    this.imageUrl = data.imageUrl;
    this.district = data.district;
    this.schoolName = data.schoolName;
    this.editDistrict = data.editDistrict;
    this.addEditDistrictCalendar = data.addEditDistrictCalendar;
    this.addEditSchoolCalendar = data.addEditSchoolCalendar;
    this.addEditTeacher = data.addEditTeacher;
    this.addEditStudent = data.addEditStudent;
    this.adminListing = false;
  }

  editAdmin() {
    this.spinner.show();
    let dataToSend = {
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      middleName: this.middleName,
      mailingAddress: this.mailingAddress,
      mailingCity: this.mailingCity,
      mailingState: this.mailingState,
      mailingZip: this.mailingZip,
      phoneNumber: this.phoneNumber,
      countryCode: this.countryCode,
      imageUrl: this.imageUrl,
      district: this.district,
      schoolName: this.schoolName,
      editDistrict: this.editDistrict,
      addEditDistrictCalendar: this.addEditDistrictCalendar,
      addEditSchoolCalendar: this.addEditSchoolCalendar,
      addEditTeacher: this.addEditTeacher,
      addEditStudent: this.addEditStudent,
    }
    this.authService.editAdmin(this.adminId, dataToSend).then((res: any) => {
      console.log("edit admin res", res);
      if (res['status'] == 200) {
        this.toastr.success(res['message'], 'Success');
        this.adminListing = true;
        this.getAdmins();
        this.spinner.hide();
      } else {
        this.toastr.error(res['message'], 'Error');
        this.spinner.hide();
      }
    });
  }

  backToList() {
    this.adminListing = true;
  }

  deleteAdminData(data: any) {
    this.adminId = data._id;
    $('#deleteAdminModal').modal('show');
  }

  deleteAdmin() {
    this.spinner.show();
    let dataToSend = {
      isDeleted: true
    }
    this.authService.deleteAdmin(this.adminId, dataToSend).then((res: any) => {
      console.log("delete admin res", res);
      if (res['status'] == 200) {
        this.toastr.success(res['message'], 'Success');
        $('#deleteAdminModal').modal('hide');
        this.getAdmins();
        this.spinner.hide();
      } else {
        this.toastr.error(res['message'], 'Error');
        this.spinner.hide();
      }
    });
  }

  cancelDelete() {
    $('#deleteAdminModal').modal('hide');
  }

  openAddForm() {
    console.log("open");
    this.adminId = "";
    this.email = "";
    this.password = "";
    this.firstName = "";
    this.lastName = "";
    this.middleName = "";
    this.mailingAddress = "";
    this.mailingCity = "";
    this.mailingState = "";
    this.mailingZip = "";
    this.phoneNumber = "";
    this.countryCode = "";
    this.imageUrl = "";
    this.district = "";
    this.schoolName = "";
    this.editDistrict = "";
    this.addEditDistrictCalendar = "";
    this.addEditSchoolCalendar = "";
    this.addEditTeacher = "";
    this.addEditStudent = "";
    this.adminListing = false;
    // $('#addAdminModal').modal('show');
  }

  addAdmin() {
    this.spinner.show();
    let dataToSend = {
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      middleName: this.middleName,
      mailingAddress: this.mailingAddress,
      mailingCity: this.mailingCity,
      mailingState: this.mailingState,
      mailingZip: this.mailingZip,
      phoneNumber: this.phoneNumber,
      countryCode: this.countryCode,
      imageUrl: this.imageUrl,
      district: this.district,
      schoolName: this.schoolName,
      editDistrict: this.editDistrict,
      addEditDistrictCalendar: this.addEditDistrictCalendar,
      addEditSchoolCalendar: this.addEditSchoolCalendar,
      addEditTeacher: this.addEditTeacher,
      addEditStudent: this.addEditStudent,
    }
    this.authService.addAdmin(dataToSend).then((res: any) => {
      console.log("add school res", res);
      if (res['status'] == 200) {
        this.toastr.success(res['message'], 'Success');
        this.adminListing = true;
        this.getAdmins();
        this.spinner.hide();
      } else {
        this.toastr.error(res['message'], 'Error');
        this.spinner.hide();
      }
    });
  }

  cancelAdd() {
    this.adminListing = true;
    this.getAdmins();
  }

  cancelEdit() {
    $('#editAdminModal').modal('hide');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    return false;
  }

  home() {
    this.router.navigate(['/dashboard'])
  }

  lettersOnly(event: any) {
    var charCode = event.keyCode;
    console.log("event_________", event, charCode)
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8 || charCode == 32)
      return true;
    else
      return false;
  }

}


