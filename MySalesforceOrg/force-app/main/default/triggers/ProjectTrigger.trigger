trigger ProjectTrigger on Project__c (after update) {
    //Call the Billing Service callout logic here
    List<Project__c > prolist = Trigger.New;
    Map<Id,Project__c> proMap = Trigger.OldMap;
    

            BillingCalloutService.callBillingService(prolist,proMap);
		
   
}