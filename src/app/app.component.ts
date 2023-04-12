import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormGroupDirective, FormControl, NgForm, FormBuilder } from '@angular/forms';

export interface Element {
  date?: Date;
  jobTitle?: string;
  department?: string;
  hmn?: string;
  hme?: string;
}

const ELEMENT_DATA: Element[] = [/*{date: new Date(), jobTitle: 'Full-Stack', department: 'Software Engineer', hmn: 'Jose Fuentes', hme: 'fuentes@gmail.com'}*/];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'redo';
  displayedColumns: string[] = ['date', 'jobTitle', 'department', 'hmn', 'hme'];
  dataSource = ELEMENT_DATA;

  /*
  userDate = '';
  userJob = '';
  userDepartment = '';
  userHMN = '';
  userHME = '';
  */

  today = new Date();
  formData!: FormGroup;
  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void{
    this.formData = this.formBuilder.group({
      date:  [new Date(), Validators.required],
      jobTitle:  ['', Validators.required],
      department:  ['', Validators.required],
      hmn:  ['', Validators.required],
      hme: ['', [Validators.required, Validators.email]],
    })
  }

  onSubmit(temp:any)
  {
    /*
    console.log(this.formData.value);
    this.userDate = this.formData.value.date;
    this.userJob = this.formData.value.jobTitle;
    this.userDepartment = this.formData.value.department;
    this.userHMN = this.formData.value.hmn;
    this.userHME = this.formData.value.hme;

    ELEMENT_DATA.push({one: this.formData.value.date, two: this.userJob, three: this.formData.value.department, four: this.formData.value.hmn, five: this.formData.value.hme})
    this.formData.reset()
    */
    if (this.formData.valid){
      let values = temp.value;
      let obj: any = {
        date: values.date,
        jobTitle: values.jobTitle,
        department: values.department,
        hmn: values.hmn,
        hme: values.hme
      };
      this.dataSource.push(obj);
      this.dataSource = [...this.dataSource];
    }
    this.formData.reset();
  }
}
