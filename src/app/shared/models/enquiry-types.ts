import { decisionMakers } from "./decision_makers";
import { Investigator } from "./investigator";

export class EnquiryTypes{
  enquiry_type_name : string;
    responder_section : string;
    provision_policy_section : string;
    legal_opinion_section : string;
    recommendation_section : string;
    anonymous_application : string;
    investigators: Array<Investigator>
    decision_makers:Array<decisionMakers>
    constructor(){
      this.investigators=new Array<Investigator>();
      this.decision_makers=new Array<decisionMakers>();
    }
}
