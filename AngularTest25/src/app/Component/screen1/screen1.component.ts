import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MasterResource } from '../helper/masterresource.service';


@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
})
export class Screen1Component implements OnInit {
  screen1Form: FormGroup = new FormGroup ({});
  get videoTitle() {
    return this.screen1Form.get('videoTitle');
  }
  get durtion() {
    return this.screen1Form.get('durtion');
  }
  get description() {
    return this.screen1Form.get('description');
  }
  get platform() {
    return this.screen1Form.get('platform');
  }
  get status() {
    return this.screen1Form.get('status');
  }
  constructor(public masterResourceService: MasterResource)
  {
  this.validation()
  }
  ngOnInit(): void {

  }
  validation()
  {
    this.clearValidation();
    this.setFormValidations();
  }
  private setFormValidations() {
    this.screen1Form
      .get('videoTitle')
      .setValidators([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]);
    this.screen1Form
      .get('durtion')
      .setValidators([
        Validators.required,
      ]);
    this.screen1Form
      .get('description')
      .setValidators([
        Validators.required,
      ]);
    this.screen1Form
      .get('platform')
      .setValidators([
        Validators.required,
      ]);
    this.screen1Form
      .get('status')
      .setValidators([
        Validators.required,
      ]);
    }
  clearValidation(){
      this.screen1Form = new FormGroup({
        videoTitle: new FormControl('', []),
        durtion: new FormControl('', []),
        description: new FormControl('', []),
        platform: new FormControl('', []),
        status: new FormControl('', [])
      });
  }
  onChangeTitle(data)
  {

  }
  valueChange(data)
  {
    // this.platform = data;
  }
  radioChange(data)
  {
    this.screen1Form.controls.status.setValue(data.value);
  }
  submit()
  {
    this.setFormValidations();
    this.masterResourceService.Validation(this.screen1Form);
    if (!this.screen1Form.valid) {
      return;
    }
    const FormObject = new Object(this.screen1Form.value);
    console.log(FormObject);
  }
  cancel()
  {
 this.clearValidation();
  }
ngOnDestroy()
{
  this.clearValidation();
}
}
