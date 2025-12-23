// [:operational] TEMPORAL TRIGGER LOGIC (HEXA-01)

/**
 * Installs a time-driven trigger that runs the sync function every 15 minutes.
 * Run this function ONCE manually to set up the heartbeat.
 */
function installTemporalTrigger() {
  // Prevent duplicate triggers
  const triggers = ScriptApp.getProjectTriggers();
  for (let i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'syncSheetToCalendar') {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }

  // Create a new trigger: Every 15 minutes
  ScriptApp.newTrigger('syncSheetToCalendar')
    .timeBased()
    .everyMinutes(15)
    .create();
    
  Logger.log('[:operational] Temporal Trigger installed. Heartbeat set to 15 mins.');
}

/**
 * The main sync function executed by the trigger.
 * This is the "Heartbeat" of the system.
 */
function syncSheetToCalendar() {
  Logger.log('[:operational] Heartbeat initiated...');
  
  // PLACEHOLDER: Define the "Gravity" logic here.
  // Example: Read from Sheet -> Push to Calendar
  // const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Schedule');
  // const calendar = CalendarApp.getDefaultCalendar();
  
  Logger.log('[:operational] Heartbeat complete. No actions defined yet.');
}
