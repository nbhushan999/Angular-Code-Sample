import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { UploadService } from 'src/app/services/upload.service';
declare let $: any;

@Component({
  selector: 'app-school-setup',
  templateUrl: './school-setup.component.html',
  styleUrls: ['./school-setup.component.scss']
})
export class SchoolSetupComponent implements OnInit {
  schoolList: any;
  schoolId: any;
  schoolName: any;
  code: any;
  year: any;
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
  principalFirstName: any;
  principalLastName: any;
  principalPhoneNumber: any;
  principalEmail: any;
  userName: any;

  imageUrl: any;
  selectedFiles: any;

  constructor(private router: Router, private authService: AuthService,
    private spinner: NgxSpinnerService, private uploadService: UploadService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.getSchool();
    this.userName = localStorage.getItem("userName");
  }

  getSchool() {
    this.spinner.show();
    this.authService.getSchool().then((res: any) => {
      this.schoolList = res['data'];
      console.log("school list___________", this.schoolList);
    });
    this.spinner.hide();
  }

  editSchoolData(data: any) {
    console.log(data);
    this.schoolName = data.name;
    this.code = data.code;
    this.year = data.year;
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
    this.principalFirstName = data.principalFirstName;
    this.principalLastName = data.principalLastName;
    this.principalPhoneNumber = data.principalPhoneNumber;
    this.principalEmail = data.principalEmail;
    this.schoolId = data._id;
    $('#editSchoolModal').modal('show');
  }

  editSchool() {
    if (!this.schoolName || !this.code || !this.year || !this.officeEmail || !this.officePhoneNumber || !this.officeFaxNumber
      || !this.physicalAddress || !this.physicalCity || !this.physicalState || !this.physicalZip || !this.mailingAddress
      || !this.mailingCity || !this.mailingState || !this.mailingZip || !this.principalFirstName || !this.principalLastName
      || !this.principalPhoneNumber || !this.principalEmail) {
      this.toastr.error('All fields are required', 'Error');
    } else {
      this.spinner.show();
      let dataToSend = {
        name: this.schoolName,
        code: this.code,
        year: this.year,
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
        principalFirstName: this.principalFirstName,
        principalLastName: this.principalLastName,
        principalPhoneNumber: this.principalPhoneNumber,
        principalEmail: this.principalEmail
      }
      this.authService.editSchool(this.schoolId, dataToSend).then((res: any) => {
        console.log("edit school res", res);
        if (res['status'] == 200) {
          this.getSchool();
          this.toastr.success(res['message'], 'Success');
          $('#editSchoolModal').modal('hide');
          this.schoolName = "";
          this.code = "";
          this.year = "";
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
          this.principalFirstName = "";
          this.principalLastName = "";
          this.principalPhoneNumber = "";
          this.principalEmail = "";
          this.schoolId = "";
          this.spinner.hide();
        } else {
          this.toastr.error(res['message'], 'Error');
          this.spinner.hide();
        }
      });
    }
  }

  deleteSchoolData(data: any) {
    this.schoolId = data._id;
    $('#deleteSchoolModal').modal('show');
  }

  cancelDelete() {
    $('#deleteSchoolModal').modal('hide');
  }

  openAddModal() {
    console.log("open");
    this.schoolName = "";
    this.code = "";
    this.year = "";
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
    this.principalFirstName = "";
    this.principalLastName = "";
    this.principalPhoneNumber = "";
    this.principalEmail = "";
    this.schoolId = "";
    this.imageUrl = "";
    $('#addSchoolModal').modal('show');
  }


  addSchool() {
    if (!this.imageUrl) {
      this.toastr.error('School image is required.', 'Error');
    } else {
      this.spinner.show();
      let dataToSend = {
        name: this.schoolName,
        code: this.code,
        year: this.year,
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
        principalFirstName: this.principalFirstName,
        principalLastName: this.principalLastName,
        principalPhoneNumber: this.principalPhoneNumber,
        principalEmail: this.principalEmail
      }
      this.authService.addSchool(dataToSend).then((res: any) => {
        console.log("add school res", res);
        if (res['status'] == 200) {
          this.toastr.success(res['message'], 'Success');
          $('#addSchoolModal').modal('hide');
          this.imageUrl = "";
          this.getSchool();
          this.spinner.hide();
        } else {
          this.toastr.error(res['message'], 'Error');
          this.spinner.hide();
        }
      });
    }
  }

  deleteSchool() {
    this.spinner.show();
    let dataToSend = {
      isDeleted: true
    }
    this.authService.deleteSchool(this.schoolId, dataToSend).then((res: any) => {
      console.log("delete school res", res);
      if (res['status'] == 200) {
        this.toastr.success(res['message'], 'Success');
        $('#deleteSchoolModal').modal('hide');
        this.getSchool();
        this.spinner.hide();
      } else {
        this.toastr.error(res['message'], 'Error');
        this.spinner.hide();
      }
    });
  }

  async selectFile(event: any) {
    console.log("in select file")
    this.selectedFiles = event.target.files;
    var reader = new FileReader();
    reader.onload = (event1: any) => {
      this.imageUrl = event1.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);
    const file = this.selectedFiles ? this.selectedFiles.item(0) : '';
    if (file) {
      let dataS = await this.uploadService.uploadFile(file);
      this.imageUrl = dataS.Location;
    }
  }

  cancelAdd() {
    $('#addSchoolModal').modal('hide');
  }

  cancelEdit() {
    $('#editSchoolModal').modal('hide');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    return false;
  }

  home() {
    this.router.navigate(['/dashboard'])
  }

}

