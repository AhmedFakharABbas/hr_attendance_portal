import { ContentObserver } from "@angular/cdk/observers";
import {
  AbstractControl,
  ValidatorFn,
  FormControl,
  FormGroup,
} from "@angular/forms";
import { timeout } from "rxjs/operators";

import { SharedService } from "src/app/shared/Service/shared.service";

export class CustomValidators {
  constructor(private _sservice: SharedService) {}

  static onlyChar(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value == "") return null;

      let re = new RegExp("^[a-zA-Z ]*$");
      if (re.test(control.value)) {
        return null;
      } else {
        return { onlyChar: true };
      }
    };
  }
  static mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
      return null;
    };
  }

  static ValidateTime(TimeIncontrolName: string, TimeOutControlName: string) {
    return (formGroup: FormGroup) => {
      const TimeIncontrol = formGroup.controls[TimeIncontrolName];
      const TimeOutControl = formGroup.controls[TimeOutControlName];

      if (
        TimeOutControl.value == undefined ||
        TimeOutControl.value == null ||
        TimeOutControl.value == ""
      ) {
        TimeOutControl.setErrors({ required: true });
        return;
      }
      if (
        TimeIncontrol.value != undefined &&
        TimeIncontrol.value != null &&
        TimeIncontrol.value != "" &&
        TimeOutControl.value != undefined &&
        TimeOutControl.value != null &&
        TimeOutControl.value != ""
      ) {
        let timeInArray = this.twentyFourHourTime(TimeIncontrol.value).split(
          ":"
        );
        let timeOutArray = this.twentyFourHourTime(TimeOutControl.value).split(
          ":"
        );
        let timeInHour = +timeInArray[0];
        let timeInMinutes = +timeInArray[1];

        let timeOutHour = +timeOutArray[0];
        let timeOutMinutes = +timeOutArray[1];

        if (
          (timeOutHour < timeInHour) ||
          (timeOutHour == timeInHour && timeOutMinutes < timeInMinutes) ||
          (timeOutHour == timeInHour && timeOutMinutes == timeInMinutes)
        ) {
          TimeOutControl.setErrors({ timeOut: true });
          return;
        }
      } else {
        return null;
      }
    };
  }
  static ValidateLMTime(TimeIncontrolName: string, TimeOutControlName: string) {
    return (formGroup: FormGroup) => {
      const TimeIncontrol = formGroup.controls[TimeIncontrolName];
      const TimeOutControl = formGroup.controls[TimeOutControlName];

      if (
        TimeOutControl.value == undefined ||
        TimeOutControl.value == null ||
        TimeOutControl.value == ""
      ) {
        TimeOutControl.setErrors({ required: true });
        return;
      }
      if (
        TimeIncontrol.value != undefined &&
        TimeIncontrol.value != null &&
        TimeIncontrol.value != "" &&
        TimeOutControl.value != undefined &&
        TimeOutControl.value != null &&
        TimeOutControl.value != ""
      ) {
        let timeInArray = this.twentyFourHourTime(TimeIncontrol.value).split(
          ":"
        );
        let timeOutArray = this.twentyFourHourTime(TimeOutControl.value).split(
          ":"
        );
        let timeInHour = +timeInArray[0];
        let timeInMinutes = +timeInArray[1];

        let timeOutHour = +timeOutArray[0];
        let timeOutMinutes = +timeOutArray[1];

           if (
          (timeOutHour < timeInHour) ||
          (timeOutHour == timeInHour && timeOutMinutes < timeInMinutes) ||
          (timeOutHour == timeInHour && timeOutMinutes == timeInMinutes)
        ) {
          TimeOutControl.setErrors({ LMtimeOut: true });
          return;
        }
      } else {
        return null;
      }
    };
  }

  static ValidateHRTime(TimeIncontrolName: string, TimeOutControlName: string) {
    return (formGroup: FormGroup) => {
      const TimeIncontrol = formGroup.controls[TimeIncontrolName];
      const TimeOutControl = formGroup.controls[TimeOutControlName];

      if (
        TimeOutControl.value == undefined ||
        TimeOutControl.value == null ||
        TimeOutControl.value == ""
      ) {
        TimeOutControl.setErrors({ required: true });
        return;
      }
      if (
        TimeIncontrol.value != undefined &&
        TimeIncontrol.value != null &&
        TimeIncontrol.value != "" &&
        TimeOutControl.value != undefined &&
        TimeOutControl.value != null &&
        TimeOutControl.value != ""
      ) {
        let timeInArray = this.twentyFourHourTime(TimeIncontrol.value).split(
          ":"
        );
        let timeOutArray = this.twentyFourHourTime(TimeOutControl.value).split(
          ":"
        );
        let timeInHour = +timeInArray[0];
        let timeInMinutes = +timeInArray[1];

        let timeOutHour = +timeOutArray[0];
        let timeOutMinutes = +timeOutArray[1];

        if (
          (timeOutHour < timeInHour) ||
          (timeOutHour == timeInHour && timeOutMinutes < timeInMinutes) ||
          (timeOutHour == timeInHour && timeOutMinutes == timeInMinutes)
        ) {
          TimeOutControl.setErrors({ HRtimeOut: true });
          return;
        }
      } else {
        return null;
      }
    };
  }
  static twentyFourHourTime(time: string) {
    //get all elements of time string
    let timArray = time.split(":");
    let hours = +timArray[0];
    let sArray = timArray[1].split(" ");
    let indicator = sArray[1];
    let Minutes = sArray[0];
    let timeString;
    //add hours for PM hours
    if (indicator == "PM" && hours < 12) {
      hours = hours + 12;
      timeString = `${hours}:${Minutes}:00`;
    } else if (indicator == "PM" && hours == 12 && Minutes == "00") {
      hours = hours;
      timeString = `${hours}:${Minutes}:00`;
    } else if (indicator == "PM" && hours == 12 && Minutes != "00") {
      timeString = `${hours}:${Minutes}:00`;
    }

    if (indicator == "AM" && hours == 12) {
      hours = hours - 12;
      let hrs = this.numberFormater(hours);
      timeString = `${hrs}:${Minutes}:00`;
    } else if (indicator == "AM" && hours < 12) {
      let hrs = this.numberFormater(hours);
      timeString = `${hrs}:${Minutes}:00`;
    }

    return timeString;
  }
  static numberFormater(n) {
    return n > 9 ? "" + n : "0" + n;
  }
}
