import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item} from '../models/item.model';
import { Application } from '../models/application.model';
@Injectable({
    providedIn: 'root',
  })
export class MasterResource
{
public dropdownList: Array<Item> = [
    {
        label: '',
        value: ''
    },
{
    label: 'Youtube',
    value: 'Youtube'
},
{
    label: 'Facebook',
    value: 'Facebook'
}
];

public dataTableList: Array<Application> = [
    {
 title: 'Video 1',
 link: 'youtube.com',
 description: 'Video desc 1',
 status: 'Active',
 platform: 'YouTube'
    },
{
    title: 'Video 2',
    link: 'facebook.com',
    description: 'Video desc 2',
    status: 'Active',
    platform: 'Facebook'
},
{
    title: 'Video 3',
link: 'instagram.com',
description: 'Video desc 3',
status: 'Active',
platform: 'Instagram'
},
{
title: 'Video 4',
link: 'aws.com',
description: 'Video desc 4',
status: 'Active',
platform: 'AWS'
}
];










 Validation(formGroup: FormGroup): boolean {
    let isInValid = false;
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.updateValueAndValidity({ onlySelf: false });
        control.markAsTouched({ onlySelf: false });
        if (control.invalid) {
          isInValid = true;
        }
      } else if (control instanceof FormGroup) {
        this.Validation(control);
      }
      return isInValid;
    });
    return isInValid;
  }
  static AsssignFormObjectToObject(TargetObj: any, SourceObj: any) {
    Object.assign(TargetObj, SourceObj);
  }
}
