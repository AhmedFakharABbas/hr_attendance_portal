export interface IDropDownsData {
  data: Array<INameField>
};
export interface ILeaveSetupGeoGroups {
  data: Array<{ field_name: string, label: string, options: Array<INameField> }>
};

interface INameField {
  id: number, name: string
}
