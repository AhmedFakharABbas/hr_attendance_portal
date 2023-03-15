import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "selectedShift",
})
export class SelectedShiftPipe implements PipeTransform {
  transform(shiftsArray: [], selected_value): unknown {
    if (
      shiftsArray == undefined ||
      (shiftsArray != undefined && shiftsArray.length == 0)
    ) {
      return shiftsArray;
    }

    if (
      selected_value == undefined ||
      selected_value == null ||
      selected_value == ""
    ) {
      return shiftsArray;
    }
    let filterArray = shiftsArray.filter(
      (shift: any) => shift.shift_id != selected_value
    );
    return filterArray;
  }
}
