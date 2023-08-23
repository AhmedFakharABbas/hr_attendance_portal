import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
@Injectable({
  providedIn: "root",
})
export class SharedService {
  constructor(private _toasterService: ToastrService) {}
  successMessage(msg: string) {
    this._toasterService.success(msg);
  }
  erroMessage(msg: string) {
    this._toasterService.error(msg);
  }
  warningMessage(msg: string) {
    this._toasterService.warning(msg);
  }
  twelveHourTime(time: string) {
    let timArray = time.split(":");
    let hours = +timArray[0];
    let Minutes = timArray[1];
    let indicator;
    if (hours > 12) {
      hours = hours - 12;
      indicator = "PM";
    } else {
      indicator = "AM";
    }
    hours = +this.numberFormater(hours);
    let timeString = `${hours}:${Minutes} ${indicator}`;
    return timeString;
  }
  twentyFourHourTime(time: string) {
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
  // parse a date in yyyy-mm-dd format
  parseDate(input) {
    let parts = input.match(/(\d+)/g);

    return new Date(parts[0], parts[1] - 1, parts[2]); // months are 0-based
  }
  //to formate number
  numberFormater(n) {
    return n > 9 ? "" + n : "0" + n;
  }
    //to formate date
    DateFormater(inputDate) {
      let roasterDate = new Date(inputDate);
      let year = roasterDate.getFullYear();
      let date = this.numberFormater(roasterDate.getDate());
      let month = this.numberFormater(roasterDate.getMonth() + 1);
      let formatedDate = `${year}-${month}-${date}`;
      return formatedDate;
    }
}
