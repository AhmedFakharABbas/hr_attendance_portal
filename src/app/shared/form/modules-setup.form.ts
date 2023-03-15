import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { EligibilityEntitlementSetupService } from 'src/app/modules/modules-setup/eligibility-entitlement-setup/eligibility-entitlement-setup.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ModulesSetupForm {

  bindUpdateFormData = new BehaviorSubject(null);
  modulesSetupForm: FormGroup;

  // Eligibility Entitlement
  labelHeaders: Array<number> = [];
  criteriaFields = [];
  initFormAgain = new BehaviorSubject({});

  constructor(
    private fb: FormBuilder,
    private eligibilityEntitlementSetupService: EligibilityEntitlementSetupService,

  ) { }

  initForm(): FormGroup {
    return this.modulesSetupForm = this.fb.group({
      geographical_setup: this.geographicalSetup(),
      reasons: this.fb.array([this.createReasons()], [Validators.required]),
      eligibilityEntitlementArray: this.fb.array([this.createEligibilityEntitlementArray()], [Validators.required])
    });
  }

  // ------------- Eligibility Entitlement
  // 1st Array
  eligibilityEntitlementArray(): FormArray {
    return this.modulesSetupForm.get('eligibilityEntitlementArray') as FormArray;
  }
  createEligibilityEntitlementArray(): FormGroup {
    return this.fb.group({
      criteriaAndCondition: this.fb.array([], [Validators.required]),
      entitlement: this.fb.control('', [Validators.required]),
      effectiveDate: this.fb.control('', [Validators.required]),
    })
  }

  createEligibilityEntitlementArrayForUpdate(): FormGroup {
    return this.fb.group({
      criteria_set_id: this.fb.control(''),
      criteriaAndCondition: this.fb.array([]),
      entitlement: this.fb.control(''),
      effectiveDate: this.fb.control(''),
    })
  }

  addEligibilityEntitlementArray(updateForm: boolean) {
    if (updateForm) {
      this.eligibilityEntitlementArray().push(this.createEligibilityEntitlementArrayForUpdate());
    } else {
      this.eligibilityEntitlementArray().push(this.createEligibilityEntitlementArray());
    }
    this.loopcriteria(true);
  }
  // 2nd Array
  createCriteriaAndCondition(): FormGroup {
    return this.fb.group({
      criteria: this.fb.control('', [Validators.required]),
      condition: this.fb.control('', [Validators.required]),
    });
  }
  criteriaAndCondition(index: number): FormArray {
    return this.eligibilityEntitlementArray().at(index).get('criteriaAndCondition') as FormArray;
  }
  addCriteriaAndCondition(newRow: boolean) {
    if (newRow) {
      this.criteriaAndCondition(this.eligibilityEntitlementArray().controls.length - 1).push(this.createCriteriaAndCondition());
    }
    if (!newRow) {
      this.labelHeaders.push(0);

      for (let index = 0; index < this.eligibilityEntitlementArray().controls.length; index++) {
        this.criteriaAndCondition(index).push(this.createCriteriaAndCondition());
      }
    }
  }
  removeCriteriaAndCondition() {
    if (this.labelHeaders.length > 3) {
      this.labelHeaders.splice(this.labelHeaders.length - 1, 1);
      for (let index = 0; index < this.eligibilityEntitlementArray().length; index++) {
        this.criteriaAndCondition(index).removeAt(this.criteriaAndCondition(index).length - 1);
      }
    }
  }
  loopcriteria(newRow: boolean) {
    let cols = 3;
    if (newRow)
      cols = this.labelHeaders.length;

    for (let index = 0; index < cols; index++) {
      this.addCriteriaAndCondition(newRow);
    }
  }
  removeEligibilityEntitlementRow(i) {
    if (this.eligibilityEntitlementArray().length > 1)
      this.eligibilityEntitlementArray().removeAt(i);
  }
  // ============== Binding values
  disableOption(rowIndex: number, columnIndex: number): boolean {
    const rowArray = this.modulesSetupForm.get('eligibilityEntitlementArray') as FormArray;
    const columnArray = rowArray.at(rowIndex).get('criteriaAndCondition') as FormArray;
    const criteria = columnArray.at(columnIndex).get('criteria').value;

    return false;
  }
  returnConditionArray(rowIndex: number, columnIndex: number): Array<any> {
    if (this.criteriaFields.length > 0) {
      const rowArray = this.modulesSetupForm.get('eligibilityEntitlementArray') as FormArray;
      const columnArray = rowArray.at(rowIndex).get('criteriaAndCondition') as FormArray;

      const criteria = columnArray.at(columnIndex).get('criteria').value;
      const conditions = this.criteriaFields.filter(map => map.control.field_name === criteria)[0];

      if (conditions)
        return conditions.value;
      return [];

    } else {
      return [];
    }
  }
  eligibilityEntitlementSetupInit(feilds) {
    feilds.subscribe((resp: any) => {
      this.criteriaFields = resp.data;
    });

    this.eligibilityEntitlementSetupService.criCondSetupEvent
      .subscribe(() => {
        this.eligibilityEntitlementSetupService.criCondSetupData.next(this.modulesSetupForm.get('eligibilityEntitlementArray'));
      });
  }
  // ------------- End

  // ------------- Reasons
  createReasons() {
    return this.fb.group({
      id: this.fb.control(null),
      reason: this.fb.control('', [Validators.required])
    })
  }
  get reasons(): FormArray {
    return this.modulesSetupForm.get('reasons') as FormArray;
  }
  addReason() {
    this.reasons.push(this.createReasons());
  }
  removeReason(index: number) {
    this.reasons.removeAt(index);
    if (!this.reasons.length) {
      this.addReason();
    }
  }
  removeAllReasons() {
    const length = this.reasons.length;

    for (let i = 0; i < length; i++) {
      this.reasons.removeAt(0);
    }
  }
  setReasonsBySetup(reason) {
    if (reason && reason.data.length) {
      this.removeAllReasons();

      for (let index = 0; index < reason.data.length; index++) {
        this.addReason();
        this.reasons.controls[index].setValue({
          id: reason.data[index].id,
          reason: reason.data[index].reason
        });
      }
    } else {
      const length = this.reasons.length;
      if (length > 1) {
        for (let index = 0; index < length; index++) {
          this.removeReason(0);
        }
      }
    }
  }
  // ------------- End

  geographicalSetup(): FormGroup {
    return this.fb.group({
      company: this.fb.control('', [Validators.required]),
      geo_groups: this.fb.array([], [Validators.required]),
      country: this.fb.control([], [Validators.required]),
      state: this.fb.control([], [Validators.required]),
      city: this.fb.control([], [Validators.required]),
      branch: this.fb.control([], [Validators.required]),
    });
  }

  bindFormData() {
    this.bindUpdateFormData
      .subscribe((resp: any) => {
        if (resp) {
          this.bindGeoGroups(resp.geographical_setup);
          this.setReasonsBySetup({ data: resp.reasons });
          this.bindEligibilityEntitlementSetup(resp.eligibility_entitlement_setup);
        }
      });
  }

  bindGeoGroups(geographical_setup) {
    const keys = Object.keys(geographical_setup.geo_groups);
    const formarray = this.modulesSetupForm.get('geographical_setup.geo_groups') as FormArray;

    for (const key of keys) {
      let controlIndex = 0;
      for (let index = 0; index < formarray.value.length; index++) {
        if (formarray.value[index].hasOwnProperty(key))
          controlIndex = index;
      }
      formarray.at(controlIndex).get(key).setValue(geographical_setup.geo_groups[key]);
    }

    // console.log(formarray.value);

    this.modulesSetupForm.get('geographical_setup').patchValue({
      country: geographical_setup.country,
      state: geographical_setup.state,
      city: geographical_setup.city,
      branch: geographical_setup.branch,
    });
  }

  bindEligibilityEntitlementSetup(eligibilityEntitlementSetup: Array<any>) {

    this.labelHeaders = [];
    // removing all items from array
    const length = this.eligibilityEntitlementArray().length;
    for (let i = 0; i < length; i++) {

      // Removing all previous Criteria and Conditions
      const criteriaAndCondition = this.criteriaAndCondition(0).length;
      for (let index = 0; index <= criteriaAndCondition; index++) {
        this.criteriaAndCondition(0).removeAt(0);
      }
      this.eligibilityEntitlementArray().removeAt(0);
    }

    const elegibility = [];
    const maxCriCondLimit = [];
    for (const setup of eligibilityEntitlementSetup) {
      this.addEligibilityEntitlementArray(true);

      const keys = Object.keys(setup.conditions);
      maxCriCondLimit.push(keys.length);

      const criteriaAndCondition = [];
      for (const key of keys) {
        criteriaAndCondition.push({
          criteria: key,
          condition: setup.conditions[key].map((i) => Number(i))
        });
      }

      elegibility.push({
        criteria_set_id: setup.criteria_set_id,
        criteriaAndCondition: criteriaAndCondition,
        entitlement: setup.entitlement,
        effectiveDate: setup.effective_date
      });
      // console.log(elegibility);
    }

    for (let index = 0; index < Math.max.apply(Math, maxCriCondLimit); index++) {
      this.addCriteriaAndCondition(false);
    }

    this.eligibilityEntitlementArray().setValue(elegibility);
    // console.log(this.modulesSetupForm.value);
  }

}
