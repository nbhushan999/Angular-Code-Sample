import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
declare let $: any;

@Component({
  selector: 'app-district-setup',
  templateUrl: './district-setup.component.html',
  styleUrls: ['./district-setup.component.scss']
})
export class DistrictSetupComponent implements OnInit {
  districtList: any;
  name: any;
  number: any;
  schoolYear: any;
  officeEmail: any;
  officePhoneNumber: any;
  officeFaxNumber: any;
  physicalAddress: any;
  physicalCity: any;
  physicalState: any;
  physicalZip: any;
  mailingAddress: any;
  mailingCity: any;
  mailingState: any;
  mailingZip: any;
  superintendentFirstName: any;
  superintendentLastName: any;
  superintendentPhoneNumber: any;
  superintendentEmail: any;

  districtId: any;
  userName: any;

  constructor(private router: Router, private authService: AuthService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.getDistrict();
    this.userName = localStorage.getItem("userName");
  }

  getDistrict() {
    this.spinner.show();
    this.authService.getDistrict().then((res: any) => {
      this.districtList = res['data'];
      this.spinner.hide();
      console.log("district list___________", this.districtList);
    });
  }

  editDistrictData(data: any) {
    console.log(data);
    this.name = data.name;
    this.number = data.number;
    this.schoolYear = data.schoolYear;
    this.officeEmail = data.officeEmail;
    this.officePhoneNumber = data.officePhoneNumber;
    this.officeFaxNumber = data.officeFaxNumber;
    this.physicalAddress = data.physicalAddress;
    this.physicalCity = data.physicalCity;
    this.physicalState = data.physicalState;
    this.physicalZip = data.physicalZip;
    this.mailingAddress = data.mailingAddress;
    this.mailingCity = data.mailingCity;
    this.mailingState = data.mailingState;
    this.mailingZip = data.mailingZip;
    this.superintendentFirstName = data.superintendentFirstName;
    this.superintendentLastName = data.superintendentLastName;
    this.superintendentPhoneNumber = data.superintendentPhoneNumber;
    this.superintendentEmail = data.superintendentEmail;
    this.districtId = data._id;
    $('#editDistrictModal').modal('show');
  }

  deleteDistrictData(data: any) {
    this.districtId = data._id;
    $('#deleteDistrictModal').modal('show');
  }

  cancelDelete() {
    $('#deleteDistrictModal').modal('hide');
  }

  editDistrict() {
    this.spinner.show();
    let dataToSend = {
      name: this.name,
      number: this.number,
      schoolYear: this.schoolYear,
      officeEmail: this.officeEmail,
      officePhoneNumber: this.officePhoneNumber,
      officeFaxNumber: this.officeFaxNumber,
      physicalAddress: this.physicalAddress,
      physicalCity: this.physicalCity,
      physicalState: this.physicalState,
      physicalZip: this.physicalZip,
      mailingAddress: this.mailingAddress,
      mailingCity: this.mailingCity,
      mailingState: this.mailingState,
      mailingZip: this.mailingZip,
      superintendentFirstName: this.superintendentFirstName,
      superintendentLastName: this.superintendentLastName,
      superintendentPhoneNumber: this.superintendentPhoneNumber,
      superintendentEmail: this.superintendentEmail,
      allowAccess: true
    }
    this.authService.editDistrict(this.districtId, dataToSend).then((res: any) => {
      console.log("edit district res", res);
      if (res['status'] == 200) {
        this.toastr.success(res['message'], 'Success');
        $('#editDistrictModal').modal('hide');
        this.getDistrict();
        this.spinner.hide();
        this.name = "";
        this.number = "";
        this.schoolYear = "";
        this.officeEmail = "";
        this.officePhoneNumber = "";
        this.officeFaxNumber = "";
        this.physicalAddress = "";
        this.physicalCity = "";
        this.physicalState = "";
        this.physicalZip = "";
        this.mailingAddress = "";
        this.mailingCity = "";
        this.mailingState = "";
        this.mailingZip = "";
        this.superintendentFirstName = "";
        this.superintendentLastName = "";
        this.superintendentPhoneNumber = "";
        this.superintendentEmail = "";
      } else {
        this.toastr.error(res['message'], 'Error');
        this.spinner.hide();
      }
    })
  }

  openAddModal() {
    console.log("open")
    $('#addDistrictModal').modal('show');
    this.name = "";
    this.number = "";
    this.schoolYear = "";
    this.officeEmail = "";
    this.officePhoneNumber = "";
    this.officeFaxNumber = "";
    this.physicalAddress = "";
    this.physicalCity = "";
    this.physicalState = "";
    this.physicalZip = "";
    this.mailingAddress = "";
    this.mailingCity = "";
    this.mailingState = "";
    this.mailingZip = "";
    this.superintendentFirstName = "";
    this.superintendentLastName = "";
    this.superintendentPhoneNumber = "";
    this.superintendentEmail = "";
  }

  addDistrict() {
    this.spinner.show();
    let dataToSend = {
      districtName: this.name,
      number: this.number,
      schoolYear: this.schoolYear,
      officeEmail: this.officeEmail,
      officePhoneNumber: this.officePhoneNumber,
      officeFaxNumber: this.officeFaxNumber,
      physicalAddress: this.physicalAddress,
      physicalCity: this.physicalCity,
      physicalState: this.physicalState,
      physicalZip: this.physicalZip,
      mailingAddress: this.mailingAddress,
      mailingCity: this.mailingCity,
      mailingState: this.mailingState,
      mailingZip: this.mailingZip,
      superintendentFirstName: this.superintendentFirstName,
      superintendentLastName: this.superintendentLastName,
      superintendentPhoneNumber: this.superintendentPhoneNumber,
      superintendentEmail: this.superintendentEmail,
      allowAccess: true
    }
    this.authService.addDistrict(dataToSend).then((res: any) => {
      console.log("add district res", res);
      if (res['status'] == 200) {
        this.toastr.success(res['message'], 'Success');
        $('#addDistrictModal').modal('hide');
        this.getDistrict();
        this.spinner.hide();
      } else {
        this.toastr.error(res['message'], 'Error');
        this.spinner.hide();
      }
    })
  }

  deleteDistrict() {
    this.spinner.show();
    let dataToSend = {
      isDeleted: true
    }
    this.authService.deleteDistrict(this.districtId, dataToSend).then((res: any) => {
      console.log("delete district res", res);
      if (res['status'] == 200) {
        this.toastr.success(res['message'], 'Success');
        $('#deleteDistrictModal').modal('hide');
        this.getDistrict();
        this.spinner.hide();
      } else {
        this.toastr.error(res['message'], 'Error');
        this.spinner.hide();
      }
    });
  }

  cancelAdd() {
    $('#addDistrictModal').modal('hide');
  }

  cancelEdit() {
    $('#editDistrictModal').modal('hide');
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