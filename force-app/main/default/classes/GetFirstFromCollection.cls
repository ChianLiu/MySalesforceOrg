global  class GetFirstFromCollection {
  @InvocableMethod
  global static List <ConvertLeadActionResult> execute (List<ConvertLeadActionRequest> requestList) {
    ConvertLeadActionRequest inputCollection = requestList[0];
    ConvertLeadActionResult ss = new ConvertLeadActionResult();
    ss.name = inputCollection.name;
    List<ConvertLeadActionResult> dslist = new List<ConvertLeadActionResult>();
    dslist.add(ss);
      
    return dslist;    
  }


 global class ConvertLeadActionRequest {
    @InvocableVariable(required=true)
    global String name;

    @InvocableVariable(required=true)
    global String reason;

    @InvocableVariable
    global Date closeDate;
 }

 global class ConvertLeadActionResult {
    @InvocableVariable
    global ID name;

    @InvocableVariable
    global ID reason;

    @InvocableVariable
    global ID closeDate;
  }
}